@echo off

@echo ################ Installing #####################

@echo Creating APK
call cordova build android

@echo Uninstalling the APK first
call adb uninstall com.vizaysoni.vs4vijay.gpstream

@echo Now installing new APK
call adb install platforms\android\bin\GPStream-debug.apk

@echo --------------Installtion Finished---------------

rem call msg * installed APK on device