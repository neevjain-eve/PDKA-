@echo off
echo Starting MIS update monitor...
call mis_env\Scripts\activate.bat
python mis_updater.py
pause
