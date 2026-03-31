param(
  [string]$ListenHost = "127.0.0.1",
  [int]$Port = 3000
)

$ErrorActionPreference = "Stop"

$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$pidPath = Join-Path $repoRoot ".devserver-$Port.pid"
$outLogPath = Join-Path $repoRoot ".devserver-$Port.out.log"
$errLogPath = Join-Path $repoRoot ".devserver-$Port.err.log"

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

$process = $null
if (Test-Path -LiteralPath $pidPath) {
  $rawPid = (Get-Content -LiteralPath $pidPath | Select-Object -First 1).Trim()
  $processId = 0
  if ([int]::TryParse($rawPid, [ref]$processId)) {
    $process = Get-Process -Id $processId -ErrorAction SilentlyContinue
  }
}

if ($null -ne $process) {
  Write-Output "managed: running"
  Write-Output "url: http://${ListenHost}:$Port"
  Write-Output "pid: $($process.Id)"
  Write-Output "port-open: $(Test-PortListening -TargetHost $ListenHost -TargetPort $Port)"
  Write-Output "stdout: $outLogPath"
  Write-Output "stderr: $errLogPath"
  exit 0
}

Write-Output "managed: stopped"
Write-Output "url: http://${ListenHost}:$Port"
Write-Output "port-open: $(Test-PortListening -TargetHost $ListenHost -TargetPort $Port)"
Write-Output "stdout: $outLogPath"
Write-Output "stderr: $errLogPath"
