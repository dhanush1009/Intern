# Contact Form Email Setup Guide

## Complete Setup Instructions

### Step 1: Install Backend Dependencies

Navigate to the server folder and install required packages:

```bash
cd server
npm install
```

This will install:
- express (web server)
- nodemailer (email sending)
- cors (cross-origin requests)
- dotenv (environment variables)
- body-parser (parse request body)

### Step 2: Configure Email Settings

Open `server/.env` file and update with your email credentials:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
EMAIL_TO=info@shanrucktech.com
PORT=5000
```

### Step 3: Gmail Setup (If using Gmail)

**Important:** You need an App Password, not your regular Gmail password.

1. Go to your Google Account: https://myaccount.google.com/
2. Click on "Security" in the left sidebar
3. Enable "2-Step Verification" if not already enabled
4. After enabling 2FA, go back to Security
5. Scroll to "Signing in to Google"
6. Click on "App passwords"
7. Select "Mail" and "Other (Custom name)"
8. Enter "Shanruck Website" as the name
9. Click "Generate"
10. Copy the 16-character password
11. Paste it in the `.env` file as `EMAIL_PASS`

**Example:**
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop
EMAIL_TO=info@shanrucktech.com
PORT=5000
```

### Step 4: Other Email Providers

#### Outlook/Hotmail
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

#### Yahoo Mail
```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
EMAIL_USER=your-email@yahoo.com
EMAIL_PASS=your-password
```

#### Custom SMTP Server
```env
EMAIL_HOST=smtp.yourdomain.com
EMAIL_PORT=587
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASS=your-password
```

### Step 5: Start the Backend Server

Open a terminal in the server folder:

```bash
cd server
npm start
```

You should see:
```
Server is running on port 5000
API endpoint: http://localhost:5000/api/contact
Email server is ready to send messages
```

### Step 6: Start the Frontend Development Server

Open another terminal in the main project folder:

```bash
npm run dev
```

The website will run on http://localhost:5173

### Step 7: Test the Contact Form

1. Open http://localhost:5173 in your browser
2. Navigate to the Contact page
3. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Phone: 1234567890
   - Course: Any course
   - Message: Test message

4. Click "Send Message"
5. You should see a success message
6. Check the inbox of the email address set in `EMAIL_TO`

## Running Both Servers Concurrently

### Option 1: Using Two Terminals (Recommended for Development)

Terminal 1 - Backend:
```bash
cd server
npm start
```

Terminal 2 - Frontend:
```bash
npm run dev
```

### Option 2: Using concurrently Package

Install concurrently in the main project:
```bash
npm install --save-dev concurrently
```

Add this script to the main `package.json`:
```json
"scripts": {
  "dev": "vite",
  "server": "cd server && npm start",
  "dev:all": "concurrently \"npm run dev\" \"npm run server\""
}
```

Then run both with:
```bash
npm run dev:all
```

## Troubleshooting

### "Network error" message appears

**Problem:** Frontend cannot connect to backend

**Solutions:**
1. Make sure the backend server is running on port 5000
2. Check the terminal for any errors
3. Verify the API URL in Contact.jsx is correct: `http://localhost:5000/api/contact`

### "Authentication failed" error

**Problem:** Email credentials are incorrect

**Solutions:**
1. Double-check EMAIL_USER is correct
2. For Gmail, ensure you're using an App Password, not your regular password
3. Verify 2-Factor Authentication is enabled
4. Generate a new App Password and try again

### Emails not being received

**Solutions:**
1. Check spam/junk folder
2. Verify EMAIL_TO address is correct in .env
3. Test with a different email address
4. Check server terminal for error messages

### Port 5000 already in use

**Problem:** Another application is using port 5000

**Solutions:**
1. Change PORT in `.env` to a different number (e.g., 5001)
2. Update the API URL in Contact.jsx to match the new port
3. Or stop the other application using port 5000

### CORS errors in browser console

**Problem:** Cross-origin request blocked

**Solutions:**
1. Ensure the backend server is running
2. Check that CORS is properly configured in server.js
3. Clear browser cache and reload

## Production Deployment

### Environment Variables
Never commit the `.env` file. Use environment variables in your hosting platform:
- Vercel, Netlify: Environment variables in dashboard
- Heroku: `heroku config:set EMAIL_USER=xxx`
- Docker: Use docker-compose environment section

### Security Checklist
- [ ] Use HTTPS in production
- [ ] Add rate limiting to prevent spam
- [ ] Implement CAPTCHA (Google reCAPTCHA)
- [ ] Sanitize all inputs
- [ ] Use strong app passwords
- [ ] Never expose .env file
- [ ] Implement request validation
- [ ] Add logging for debugging

### Deployment Steps
1. Set up backend on a Node.js hosting service
2. Update the API URL in Contact.jsx to your backend URL
3. Configure environment variables on hosting platform
4. Test the form after deployment
5. Monitor email delivery

## Testing the API Directly

You can test the API using curl or Postman:

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "course": "Full Stack Development",
    "message": "This is a test message"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Your enquiry has been successfully submitted. We will contact you soon."
}
```

## Support

If you encounter issues:
1. Check server terminal for error messages
2. Check browser console for errors
3. Verify all environment variables are set correctly
4. Test API directly with curl/Postman
5. Review the troubleshooting section above

## Security Note

⚠️ **Important**: Never commit the `.env` file to version control. The `.env.example` file is provided as a template. Always create your own `.env` file locally with your actual credentials.
