# Troubleshooting Guide

## Issue: Add Category/Product buttons don't work

### Solution Steps:

1. **Start the Django Server First**
   ```bash
   cd backend
   env\Scripts\activate  # (if not already activated)
   python manage.py runserver
   ```
   
2. **Verify Server is Running**
   - Open browser to http://127.0.0.1:8000/api/
   - You should see the Django REST API root page
   
3. **Test API Connection**
   - Open `frontend/test.html` in browser
   - Click "Test API Connection" button
   - Should show success message
   
4. **Open Main Application**
   - Open `frontend/index.html` in browser
   - Check browser console (F12) for any errors
   - Try adding categories and products

### Common Issues:

1. **CORS Error**: Fixed by setting `CORS_ALLOW_ALL_ORIGINS = True`
2. **Server Not Running**: Must start Django server first
3. **Port Conflicts**: Django runs on port 8000 by default

### Quick Test:
Run the batch file: `start_server.bat` to start Django server automatically.