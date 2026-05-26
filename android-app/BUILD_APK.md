# Ironix Android APK

This Android project wraps the Ironix PHP website in a WebView.

Default site URL:

```text
http://10.0.2.2/ironix/
```

Use that URL for the Android emulator. On a real Android phone, `localhost` will not work because it points to the phone. Use either:

```text
http://YOUR-PC-LAN-IP/ironix/
```

or your hosted Ironix domain.

The app includes a `Site` button so you can change the URL without rebuilding.

Build debug APK from this folder:

```powershell
$env:JAVA_HOME = "C:\Program Files\Android\Android Studio\jbr"
$env:ANDROID_HOME = "$env:LOCALAPPDATA\Android\Sdk"
& "$env:USERPROFILE\.gradle\wrapper\dists\gradle-9.4.1-bin\arn2x92ynaizyzdaamcbpbhtj\gradle-9.4.1\bin\gradle.bat" assembleDebug
```

APK output:

```text
app/build/outputs/apk/debug/app-debug.apk
```
