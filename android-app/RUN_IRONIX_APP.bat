@echo off
setlocal

set "ROOT=%~dp0"
set "JAVA_HOME=C:\Program Files\Android\Android Studio\jbr"
set "ANDROID_HOME=%LOCALAPPDATA%\Android\Sdk"
set "ADB=%ANDROID_HOME%\platform-tools\adb.exe"
set "EMULATOR=%ANDROID_HOME%\emulator\emulator.exe"
set "GRADLE=%ROOT%gradlew.bat"

cd /d "%ROOT%"

echo Building Ironix Android APK...
call "%GRADLE%" assembleDebug || exit /b 1

echo Checking for Android device...
"%ADB%" start-server
"%ADB%" devices | findstr /R /C:"device$" >nul
if errorlevel 1 (
  echo Starting Pixel_6 emulator...
  start "" "%EMULATOR%" -avd Pixel_6 -no-snapshot-load
  echo Waiting for emulator to connect...
  "%ADB%" wait-for-device
)

echo Installing Ironix...
"%ADB%" install -r "%ROOT%app\build\outputs\apk\debug\app-debug.apk" || exit /b 1

echo Launching Ironix...
"%ADB%" shell am start -n com.ironix.fitness/.MainActivity

echo Done. Ironix should now be open on the Android device or emulator.
pause
