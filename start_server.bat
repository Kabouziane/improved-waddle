@echo off
cd /d "c:\Users\Karim\Desktop\improved-waddle"
call env\Scripts\activate
cd backend
echo Starting Django server...
python manage.py runserver 127.0.0.1:8000