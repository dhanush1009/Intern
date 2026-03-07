# Shanruck Technologies - Backend Server

## Setup Instructions

### 1. Install Dependencies
```bash
cd server
npm install
```

### 2. Configure Email Settings

Edit the `.env` file with your email credentials:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=info@shanrucktech.com
PORT=5000
```

### For Gmail Users:
1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the generated app password in EMAIL_PASS

### For Other Email Providers:
- **Outlook/Hotmail**: host: `smtp-mail.outlook.com`, port: `587`
- **Yahoo**: host: `smtp.mail.yahoo.com`, port: `587`
- **Custom SMTP**: Use your provider's SMTP settings

### 3. Start the Server
```bash
npm start
```

Server will run on http://localhost:5000

### 4. Test the API
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "course": "Full Stack Development",
    "message": "Test message"
  }'
```

## API Endpoints

### POST /api/contact
Submit contact form

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "course": "Full Stack Development",
  "message": "I want to know more about the course"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Your enquiry has been successfully submitted. We will contact you soon."
}
```

**Error Response (400):**
```json
{
  "success": false,
  "errors": ["Name is required", "Valid email is required"]
}
```

### GET /api/health
Check server status

**Response:**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Running in Production

1. Update `.env` with production email credentials
2. Set PORT to your preferred port
3. Use a process manager like PM2:
```bash
npm install -g pm2
pm2 start server.js --name shanruck-server
pm2 save
pm2 startup
```

## Security Notes

- Never commit `.env` file to version control
- Use strong app passwords
- Enable rate limiting in production
- Use HTTPS in production
- Validate and sanitize all inputs

## Troubleshooting

**Email not sending:**
- Check EMAIL_USER and EMAIL_PASS are correct
- Verify 2FA is enabled and app password is generated
- Check SMTP settings for your email provider
- Look at server console for error messages

**CORS errors:**
- Ensure frontend origin is allowed in CORS configuration
- Update CORS settings if deploying to different domain
