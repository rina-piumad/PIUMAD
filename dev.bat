@echo off
title Pium Homepage Dev Server
set "PATH=C:\Program Files\nodejs;%PATH%"
echo ========================================
echo   Pium Homepage 개발 서버 시작 중...
echo   http://localhost:3000
echo ========================================
echo.
npm run dev
if errorlevel 1 (
    echo.
    echo [오류] 서버 시작에 실패했습니다.
    pause
)
