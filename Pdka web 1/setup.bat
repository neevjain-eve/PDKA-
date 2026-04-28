@echo off
echo Creating virtual environment...
python -m venv mis_env

echo Activating and installing dependencies...
call mis_env\Scripts\activate.bat
pip install --upgrade pip
pip install -r requirements.txt

echo Setup complete. Use 'run.bat' to start the monitor.
pause
