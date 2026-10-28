@echo off
setlocal
title Ad Altare
set "APPDIR=%~dp0"
set "NODEEXE="

where node.exe >nul 2>nul
if not errorlevel 1 set "NODEEXE=node.exe"

if not defined NODEEXE if exist "%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" set "NODEEXE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"

if not defined NODEEXE (
  echo Ad Altare needs Node.js to open as a local desktop app.
  echo Please keep this window open and ask Codex to restore the launcher.
  pause
  exit /b 1
)

start "Ad Altare local service" /min "%NODEEXE%" "%APPDIR%server.js"
timeout /t 1 /nobreak >nul
start "" "http://127.0.0.1:4173/"
exit /b 0
