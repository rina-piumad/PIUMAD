@echo off
:: 포트 3000 닫기 (인바운드 + 아웃바운드 규칙 삭제)
:: 관리자 권한으로 실행해야 합니다!

echo ========================================
echo   포트 3000 방화벽 닫기
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

:: 인바운드 규칙 삭제
echo [1/2] 인바운드 규칙 삭제 중...
netsh advfirewall firewall delete rule name="Next.js Dev Server (Inbound)"

:: 아웃바운드 규칙 삭제
echo [2/2] 아웃바운드 규칙 삭제 중...
netsh advfirewall firewall delete rule name="Next.js Dev Server (Outbound)"

echo.
echo ========================================
echo   완료! 포트 3000이 닫혔습니다.
echo ========================================
pause
