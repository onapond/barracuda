param(
  [int]$Port = 3000
)

$ErrorActionPreference = "Stop"

$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$pidPath = Join-Path $repoRoot ".devserver-$Port.pid"

if (-not (Test-Path -LiteralPath $pidPath)) {
  Write-Output "No managed dev server PID file found for port $Port."
  exit 0
}

$rawPid = (Get-Content -LiteralPath $pidPath | Select-Object -First 1).Trim()
$processId = 0
if (-not [int]::TryParse($rawPid, [ref]$processId)) {
  Remove-Item -LiteralPath $pidPath -Force -ErrorAction SilentlyContinue
  throw "Invalid PID file content in $pidPath"
}

$process = Get-Process -Id $processId -ErrorAction SilentlyContinue
if ($null -eq $process) {
  Remove-Item -LiteralPath $pidPath -Force -ErrorAction SilentlyContinue
  Write-Output "Managed dev server was already stopped."
  exit 0
}

Stop-Process -Id $processId -Force
Remove-Item -LiteralPath $pidPath -Force -ErrorAction SilentlyContinue
Write-Output "Stopped managed dev server PID $processId."
