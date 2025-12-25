@echo off
:: 포트 3000 열기 (인바운드 + 아웃바운드)
:: 관리자 권한으로 실행해야 합니다!

echo ========================================
echo   포트 3000 방화벽 열기
echo ========================================
echo.

:: 관리자 권한 확인
net session >nul 2>&1
if %errorLevel% neq 0 (
    echo [오류] 관리자 권한으로 실행하세요!
    echo 이 파일을 우클릭 → "관리자 권한으로 실행"
    pause
    exit /b 1
)

:: 인바운드 규칙 추가
echo [1/2] 인바운드 규칙 추가 중...
netsh advfirewall firewall add rule name="Next.js Dev Server (Inbound)" dir=in action=allow protocol=tcp localport=3000

:: 아웃바운드 규칙 추가
echo [2/2] 아웃바운드 규칙 추가 중...
netsh advfirewall firewall add rule name="Next.js Dev Server (Outbound)" dir=out action=allow protocol=tcp localport=3000

echo.
echo ========================================
echo   완료! 포트 3000이 열렸습니다.
echo   핸드폰에서 http://192.168.0.15:3000 접속
echo ========================================
pause
