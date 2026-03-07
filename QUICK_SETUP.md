# ⚡ Quick Setup Checklist

Follow these steps to get your contact form working in under 10 minutes.

## ✅ Step 1: Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd server
npm install
cd ..
```

## ✅ Step 2: Get Gmail App Password

1. Go to https://myaccount.google.com/security
2. Enable "2-Step Verification" if not already enabled
3. Search for "App passwords" in the page
4. Click "App passwords"
5. Select "Mail" and your device
6. Copy the 16-character password (example: `abcd efgh ijkl mnop`)

## ✅ Step 3: Configure Email

```bash
# Create .env file in server folder
cd server
copy .env.example .env  # Windows
# OR
cp .env.example .env    # Mac/Linux
```

Edit `server/.env` with your details:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com          # ← Your Gmail address
EMAIL_PASS=abcdefghijklmnop              # ← Your App Password (no spaces)
EMAIL_TO=institute-email@gmail.com       # ← Where to receive enquiries
```

## ✅ Step 4: Test Email (Optional but Recommended)

```bash
cd server
npm test
```

You should see:
- ✅ Email configuration is working!
- ✅ Test email sent successfully!

Check your EMAIL_TO inbox for the test email.

## ✅ Step 5: Start Servers

### Option A: Easy Way (Automated)

**Windows:**
```bash
start-dev.bat
```

**Mac/Linux:**
```bash
bash start-dev.sh
```

### Option B: Manual Way

**Terminal 1 - Backend:**
```bash
cd server
npm start
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

## ✅ Step 6: Test Contact Form

1. Open http://localhost:5173 in your browser
2. Click "Contact" in the navigation
3. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Phone: 1234567890
   - Course: Web Development
   - Message: This is a test enquiry
4. Click "Submit"
5. You should see a green success message
6. Check EMAIL_TO inbox for the enquiry email

## 🎉 Success!

If you received the email, your contact form is working!

## ❌ Troubleshooting

### "Invalid login" error
- Make sure you're using the App Password (not your regular Gmail password)
- Ensure 2-Step Verification is enabled on your Google account
- Remove any spaces from the App Password

### "Connection timeout" error
- Check your internet connection
- Verify EMAIL_HOST is `smtp.gmail.com`
- Verify EMAIL_PORT is `587`
- Try using port `465` instead

### Server won't start
- Make sure port 5000 is not in use
- Check if all dependencies installed: `cd server && npm install`
- Ensure .env file exists in server folder

### Form shows error message
- Check backend server is running (Terminal 1)
- Open browser console (F12) for error details
- Verify API URL in Contact.jsx is `http://localhost:5000/api/contact`

### Email not received
1. Check spam folder
2. Run `npm test` in server folder to verify configuration
3. Make sure EMAIL_TO is correct
4. Check server terminal for error messages

## 📧 Using Other Email Providers

### Outlook/Hotmail
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_USER=your-email@outlook.com
EMAIL_PASS=your-password
```

### Yahoo
```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
EMAIL_USER=your-email@yahoo.com
EMAIL_PASS=your-app-password
```

For detailed setup, see [CONTACT_FORM_SETUP.md](CONTACT_FORM_SETUP.md)

## 🚀 Next Steps

1. ✅ Customize the website content
2. ✅ Add your institute logo
3. ✅ Update course information
4. ✅ Add student testimonials
5. ✅ Deploy to production (see CONTACT_FORM_SETUP.md)

## 📚 Need More Help?

- Detailed setup: [CONTACT_FORM_SETUP.md](CONTACT_FORM_SETUP.md)
- Project overview: [README.md](README.md)
- Server documentation: [server/README.md](server/README.md)

---

**Remember:** Never share your EMAIL_PASS or commit the .env file to version control!
