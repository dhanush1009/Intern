# Shanruck Technologies - Backend Server

Backend API server for Shanruck Technologies contact form using Node.js, Express, and Nodemailer with GoDaddy email hosting.

## Features

- ✅ Contact form API endpoint (`/api/contact`)
- ✅ Chatbot query API endpoint (`/api/chatbot-query`)
- ✅ Email sending via GoDaddy SMTP
- ✅ Input validation and error handling
- ✅ CORS enabled for frontend integration
- ✅ Health check endpoint

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- GoDaddy email account (info@shanrucktechnologies.in)

## Setup Instructions

### 1. Install Dependencies

```bash
cd server
npm install
```

### 2. Configure GoDaddy Email Settings

Edit the `.env` file in the server directory:

```env
# GoDaddy Email Configuration
EMAIL_HOST=smtpout.secureserver.net
EMAIL_PORT=465
EMAIL_USER=info@shanrucktechnologies.in
EMAIL_PASS=your-godaddy-email-password
EMAIL_TO=info@shanrucktechnologies.in

# Server Configuration
PORT=5000
```

### GoDaddy Email Setup Steps:

1. **Log into your GoDaddy account**
2. **Access your email account** at https://email.office365.com
3. **Get your email password** (the password you use to log into webmail)
4. **Update the .env file** with your actual GoDaddy email password

**Important Notes:**
- Use your full email address as EMAIL_USER
- Use your regular GoDaddy email password (not an app password)
- Port 465 uses SSL encryption for secure connection
- If port 465 doesn't work, try port 587 with `secure: false`

### 3. Test Email Configuration

Before starting the server, test your email setup:

```bash
cd server
node test-email.js
```

This will verify your GoDaddy SMTP configuration and send a test email.

### 4. Start the Server

For development:
```bash
cd server
npm start
```

The server will start on http://localhost:5000

### 5. Verify Server is Running

Check the health endpoint:
```bash
curl http://localhost:5000/api/health
```

Expected response:
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## API Endpoints

### POST /api/contact
Handles contact form submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "course": "Full Stack Web Development",
  "message": "I am interested in your courses..."
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Your enquiry has been successfully submitted. We will contact you soon."
}
```

**Response (Error):**
```json
{
  "success": false,
  "errors": ["Email is required", "Valid email is required"]
}
```

### POST /api/chatbot-query
Handles chatbot query submissions.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "query": "What courses do you offer?"
}
```

### GET /api/health
Health check endpoint.

## Testing the Contact Form

### Using cURL:
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+91 9876543210",
    "course": "Full Stack Web Development",
    "message": "This is a test message from the contact form."
  }'
```

### Using the Frontend:
1. Start the React development server in the main project directory:
   ```bash
   cd ..
   npm run dev
   ```
2. Open http://localhost:5173 in your browser
3. Navigate to the Contact page
4. Fill out and submit the contact form

## Troubleshooting

### Email Not Sending:
1. **Check .env file**: Ensure EMAIL_PASS is your actual GoDaddy email password
2. **Test configuration**: Run `node test-email.js` to verify SMTP settings
3. **GoDaddy restrictions**: Some GoDaddy plans may have SMTP sending limits
4. **Firewall/Security**: Ensure your network allows SMTP connections on port 465

### Server Not Starting:
1. **Port conflict**: Change PORT in .env if 5000 is already in use
2. **Dependencies**: Run `npm install` to ensure all packages are installed
3. **Node version**: Ensure you're using Node.js v16 or higher

### CORS Errors:
- The server has CORS enabled for all origins in development
- For production, configure allowed origins in the CORS settings

## Production Deployment

### Environment Variables:
- Set all variables in your production environment
- Use secure methods to store EMAIL_PASS (environment variables, secrets management)
- Consider using port 587 with `secure: false` for some hosting providers

### Security Considerations:
- Validate all input on both frontend and backend
- Rate limiting may be needed for production
- Consider using HTTPS in production
- Monitor email sending limits with GoDaddy

## File Structure

```
server/
├── .env                    # Environment configuration
├── package.json           # Dependencies and scripts
├── server.js             # Main server file
├── test-email.js         # Email configuration test script
└── README.md             # This file
```

## Support

For issues with:
- **GoDaddy email setup**: Contact GoDaddy support
- **Server configuration**: Check the troubleshooting section above
- **Frontend integration**: Ensure the React app is running on the correct port
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
