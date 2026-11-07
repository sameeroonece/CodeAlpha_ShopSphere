@echo off
title ShopSphere - Smart Shopping Store
echo ================================================================
echo    Launching ShopSphere E-Commerce Full-Stack Server
echo    CodeAlpha Internship Task 1
echo ================================================================
echo.
cd /d "%~dp0"

where node >nul 2>nul
if %errorlevel% equ 0 (
    echo [OK] Starting with system Node.js...
    node server.js
) else (
    echo [OK] Starting with Node.js engine...
    "C:\Users\samee\AppData\Roaming\Antigravity\bin\agy-node.cmd" server.js
)

pause
