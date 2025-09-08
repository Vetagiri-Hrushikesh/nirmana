@echo off
setlocal

title Nirmana IDE Dev

pushd %~dp0\..

:: Get electron, compile, built-in extensions
if "%NIRMANA_SKIP_PRELAUNCH%"=="" node build/npm/postinstall.js

for /f "tokens=2 delims=:," %%a in ('findstr /R /C:"\"nameShort\":.*" product.json') do set NAMESHORT=%%~a
set NAMESHORT=%NAMESHORT: "=%
set NAMESHORT=%NAMESHORT:"=%.exe
set NIRMANA="dist-electron\main.js"

:: Configuration
set NODE_ENV=development
set NIRMANA_DEV=1
set NIRMANA_CLI=1
set ELECTRON_ENABLE_LOGGING=1
set ELECTRON_ENABLE_STACK_DUMPING=1

:: Launch Nirmana
electron %NIRMANA% . %*

popd

endlocal
