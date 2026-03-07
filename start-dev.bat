@echo off
echo =========================================
echo Shanruck Technologies - Development Setup
echo =========================================
echo.

REM Check if server dependencies are installed
if not exist "server\node_modules" (
    echo Installing server dependencies...
    cd server
    call npm install
    cd ..
    echo Server dependencies installed
    echo.
) else (
    echo Server dependencies already installed
    echo.
)

REM Check if .env file exists
if not exist "server\.env" (
    echo WARNING: server\.env file not found!
    echo Copying .env.example to .env...
    copy server\.env.example server\.env
    echo.
    echo IMPORTANT: Please edit server\.env and add your email credentials:
    echo    - EMAIL_USER: Your email address
    echo    - EMAIL_PASS: Your app-specific password
    echo.
    echo See CONTACT_FORM_SETUP.md for detailed setup instructions
    echo.
    pause
) else (
    echo Environment file exists
    echo.
)

echo =========================================
echo Starting Development Servers...
echo =========================================
echo.
echo Backend will run on: http://localhost:5000
echo Frontend will run on: http://localhost:5173
echo.
echo.
echo Please run these commands in TWO SEPARATE terminals:
echo.
echo Terminal 1: cd server ^&^& npm start
echo Terminal 2: npm run dev
echo.
echo Press any key to exit...
pause >nul
