# Shanruck Technologies Website

A professional training institute website built with React, featuring a fully functional contact form with email integration.

## 🌟 Features

- **Modern React Architecture**: Built with React 19.2.0 and React Router 7.13.1
- **Professional Light Theme Design**: Clean, accessible color scheme optimized for institutes
- **Fully Functional Contact Form**: Direct email delivery with Nodemailer integration
- **Form Validation**: Client-side and server-side validation for all fields
- **User Feedback**: Animated success/error messages with loading states
- **Responsive Design**: Mobile-first approach, works on all devices
- **SEO Optimized**: Proper meta tags and semantic HTML

## 📋 Pages

- **Home**: Hero section with course statistics and feature highlights
- **About**: Institute information and team details
- **Programs**: Available courses and training programs
- **Learners**: Student testimonials and success stories
- **Contact**: Fully functional contact form with email integration

## 🚀 Quick Start

### Prerequisites

- Node.js 16.0 or higher
- npm or yarn
- Gmail account (or other SMTP email service)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd shanruck
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

4. **Configure email settings**
   ```bash
   cd server
   cp .env.example .env
   # Edit .env with your email credentials
   ```

5. **Test email configuration** (Optional but recommended)
   ```bash
   cd server
   npm test
   ```

6. **Start development servers**
   
   Option A: Use automated scripts
   ```bash
   # Windows
   start-dev.bat
   
   # Linux/Mac
   bash start-dev.sh
   ```
   
   Option B: Manual start
   ```bash
   # Terminal 1 - Start backend
   cd server
   npm start
   
   # Terminal 2 - Start frontend
   npm run dev
   ```

7. **Open in browser**: http://localhost:5173

## 📧 Email Configuration

### GoDaddy Email Setup (Required)

Since your domain is hosted with GoDaddy, use these SMTP settings:

1. **Get your GoDaddy email password**:
   - Log into your GoDaddy account
   - Access email at https://email.office365.com
   - Use your regular email password (not an app password)

2. **Configure `server/.env`**:
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

3. **Test the configuration**:
   ```bash
   cd server
   node test-email.js
   ```

### Alternative: Gmail Setup

If you prefer to use Gmail instead:

1. Enable 2-Factor Authentication on your Google account
2. Generate an App Password at https://myaccount.google.com/apppasswords
3. Update `server/.env`:
   ```env
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-16-char-app-password
   EMAIL_TO=info@shanrucktechnologies.in
   ```

### Other Email Providers

See [CONTACT_FORM_SETUP.md](CONTACT_FORM_SETUP.md) for configuration details.

## 🛠️ Technology Stack

### Frontend
- React 19.2.0
- React Router 7.13.1
- Vite 7.3.1
- React Icons 5.6.0

### Backend
- Node.js
- Express 4.18.2
- Nodemailer 6.9.7
- CORS 2.8.5
- Dotenv 16.3.1

## 📂 Project Structure

```
shanruck/
├── src/
│   ├── components/     # Reusable components (Navbar, Footer)
│   ├── pages/          # Page components (Home, About, Contact, etc.)
│   ├── assets/         # Images and static files
│   ├── App.jsx         # Main app component with routing
│   └── main.jsx        # Entry point
├── server/
│   ├── server.js       # Express server with email API
│   ├── .env            # Email configuration (create from .env.example)
│   ├── .env.example    # Template for email configuration
│   └── test-email.js   # Email configuration tester
├── public/             # Static assets
└── README.md           # This file
```

## 🎨 Color Scheme

- Primary Blue: `#2563eb`
- Light Blue: `#60a5fa`
- Backgrounds: `#eff6ff`, `#dbeafe`
- Text: `#1e293b`, `#475569`
- Success: `#10b981`
- Error: `#ef4444`

## 🧪 Testing

### Test Email Configuration
```bash
cd server
npm test
```

This will verify your email settings and send a test email.

### Test Contact Form
1. Start both servers
2. Navigate to http://localhost:5173/contact
3. Fill out the form
4. Submit and check for success message
5. Verify email arrives at configured EMAIL_TO address

## 📦 Building for Production

```bash
# Build frontend
npm run build

# Preview production build
npm run preview
```

For backend deployment, see [CONTACT_FORM_SETUP.md](CONTACT_FORM_SETUP.md) for detailed production deployment instructions.

## 🔒 Security Notes

- Never commit `.env` files to version control
- Use App Passwords instead of regular passwords for Gmail
- Enable 2-Factor Authentication on your email account
- Consider adding rate limiting for production
- Implement CAPTCHA to prevent spam in production

## 🐛 Troubleshooting

### "Invalid login" error
- Ensure you're using an App Password (not regular password) for Gmail
- Verify 2-Factor Authentication is enabled
- Check EMAIL_USER is the full email address

### Email not sending
- Run `npm test` in server directory to verify configuration
- Check SMTP settings (host and port)
- Verify firewall isn't blocking port 587
- Check email provider allows SMTP access

### Form not submitting
- Ensure backend server is running on port 5000
- Check browser console for errors
- Verify CORS is properly configured
- Check network tab for API request status

For more troubleshooting, see [CONTACT_FORM_SETUP.md](CONTACT_FORM_SETUP.md)

## 📝 License

This project is created for Shanruck Technologies training institute.

## 🤝 Support

For issues or questions:
1. Check [CONTACT_FORM_SETUP.md](CONTACT_FORM_SETUP.md) for detailed setup instructions
2. Review troubleshooting section above
3. Check server logs for error messages
4. Contact the development team

---

Built with ❤️ using React + Vite + Node.js
