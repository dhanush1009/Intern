// Quick test script to verify email configuration
// Run this with: node test-email.js

import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

console.log('Testing email configuration...\n');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

console.log('Configuration:');
console.log(`Host: ${process.env.EMAIL_HOST}`);
console.log(`Port: ${process.env.EMAIL_PORT}`);
console.log(`User: ${process.env.EMAIL_USER}`);
console.log(`Password: ${process.env.EMAIL_PASS ? 'kujfqixgkabcmatj' : 'NOT SET'}`);
console.log(`Send to: ${process.env.EMAIL_TO}\n`);

transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email configuration failed!');
    console.error('Error:', error.message);
    console.log('\nPlease check:');
    console.log('1. EMAIL_USER is correct');
    console.log('2. EMAIL_PASS is an App Password (for Gmail)');
    console.log('3. 2-Factor Authentication is enabled');
    console.log('4. SMTP settings are correct');
  } else {
    console.log('✅ Email configuration is working!');
    console.log('\nSending test email...');
    
    const mailOptions = {
      from: `"Shanruck Test" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: 'Test Email from Shanruck Contact Form',
      text: 'This is a test email to verify the email configuration is working correctly.',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #2563eb;">Test Email</h2>
          <p>This is a test email to verify the email configuration is working correctly.</p>
          <p>If you received this email, your contact form is ready to use!</p>
        </div>
      `,
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('❌ Failed to send test email');
        console.error('Error:', error.message);
      } else {
        console.log('✅ Test email sent successfully!');
        console.log('Message ID:', info.messageId);
        console.log(`\nCheck the inbox of: ${process.env.EMAIL_TO}`);
      }
    });
  }
});
