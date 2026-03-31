param(
  [string]$ListenHost = "127.0.0.1",
  [int]$Port = 3000,
  [int]$TimeoutSeconds = 45
)

$ErrorActionPreference = "Stop"

$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$pidPath = Join-Path $repoRoot ".devserver-$Port.pid"
$outLogPath = Join-Path $repoRoot ".devserver-$Port.out.log"
$errLogPath = Join-Path $repoRoot ".devserver-$Port.err.log"
$nextCliPath = Join-Path $repoRoot "node_modules\next\dist\bin\next"

function Get-ManagedProcess {
  param([string]$PidFile)

  if (-not (Test-Path -LiteralPath $PidFile)) {
    return $null
  }

  $rawPid = (Get-Content -LiteralPath $PidFile -ErrorAction Stop | Select-Object -First 1).Trim()
  if (-not $rawPid) {
    Remove-Item -LiteralPath $PidFile -Force -ErrorAction SilentlyContinue
    return $null
  }

  $processId = 0
  if (-not [int]::TryParse($rawPid, [ref]$processId)) {
    Remove-Item -LiteralPath $PidFile -Force -ErrorAction SilentlyContinue
    return $null
  }

  $process = Get-Process -Id $processId -ErrorAction SilentlyContinue
  if ($null -eq $process) {
    Remove-Item -LiteralPath $PidFile -Force -ErrorAction SilentlyContinue
    return $null
  }

  return $process
}

function Test-PortListening {
  param([string]$TargetHost, [int]$TargetPort)

  try {
    $client = [System.Net.Sockets.TcpClient]::new()
    $client.Connect($TargetHost, $TargetPort)
    $client.Dispose()
    return $true
  } catch {
    return $false
  }
}

if (-not (Test-Path -LiteralPath $nextCliPath)) {
  throw "Next CLI was not found at $nextCliPath"
}

$existingProcess = Get-ManagedProcess -PidFile $pidPath
if ($null -ne $existingProcess) {
  Write-Output "Dev server already running on http://${ListenHost}:$Port (PID $($existingProcess.Id))."
  Write-Output "Logs: $outLogPath"
  exit 0
}

if (Test-PortListening -TargetHost $ListenHost -TargetPort $Port) {
  throw "Port $Port is already in use by another process."
}

if (Test-Path -LiteralPath $outLogPath) {
  Remove-Item -LiteralPath $outLogPath -Force
}

if (Test-Path -LiteralPath $errLogPath) {
  Remove-Item -LiteralPath $errLogPath -Force
}

$process = Start-Process `
  -FilePath "node.exe" `
  -ArgumentList @($nextCliPath, "dev", "--hostname", $ListenHost, "--port", $Port) `
  -WorkingDirectory $repoRoot `
  -RedirectStandardOutput $outLogPath `
  -RedirectStandardError $errLogPath `
  -WindowStyle Hidden `
  -PassThru

Set-Content -LiteralPath $pidPath -Value $process.Id -NoNewline

$deadline = (Get-Date).AddSeconds($TimeoutSeconds)
while ((Get-Date) -lt $deadline) {
  $runningProcess = Get-Process -Id $process.Id -ErrorAction SilentlyContinue
  if ($null -eq $runningProcess) {
    $stderr = if (Test-Path -LiteralPath $errLogPath) { Get-Content -LiteralPath $errLogPath -Tail 20 } else { @() }
    $stdout = if (Test-Path -LiteralPath $outLogPath) { Get-Content -LiteralPath $outLogPath -Tail 20 } else { @() }
    Remove-Item -LiteralPath $pidPath -Force -ErrorAction SilentlyContinue
    throw "Dev server exited before becoming ready.`nSTDOUT:`n$($stdout -join [Environment]::NewLine)`nSTDERR:`n$($stderr -join [Environment]::NewLine)"
  }

  if (Test-PortListening -TargetHost $ListenHost -TargetPort $Port) {
    Write-Output "Dev server started on http://${ListenHost}:$Port"
    Write-Output "PID: $($process.Id)"
    Write-Output "stdout: $outLogPath"
    Write-Output "stderr: $errLogPath"
    exit 0
  }

  Start-Sleep -Milliseconds 500
}

throw "Dev server did not become ready within $TimeoutSeconds seconds."
