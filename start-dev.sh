#!/bin/bash

echo "========================================="
echo "Shanruck Technologies - Development Setup"
echo "========================================="
echo ""

# Check if server dependencies are installed
if [ ! -d "server/node_modules" ]; then
    echo "📦 Installing server dependencies..."
    cd server
    npm install
    cd ..
    echo "✅ Server dependencies installed"
    echo ""
else
    echo "✅ Server dependencies already installed"
    echo ""
fi

# Check if .env file exists
if [ ! -f "server/.env" ]; then
    echo "⚠️  WARNING: server/.env file not found!"
    echo "📝 Copying .env.example to .env..."
    cp server/.env.example server/.env
    echo ""
    echo "🔧 IMPORTANT: Please edit server/.env and add your email credentials:"
    echo "   - EMAIL_USER: Your email address"
    echo "   - EMAIL_PASS: Your app-specific password"
    echo ""
    echo "📖 See CONTACT_FORM_SETUP.md for detailed setup instructions"
    echo ""
else
    echo "✅ Environment file exists"
    echo ""
fi

echo "========================================="
echo "Starting Development Servers..."
echo "========================================="
echo ""
echo "🚀 Backend will run on: http://localhost:5000"
echo "🚀 Frontend will run on: http://localhost:5173"
echo ""
echo "Press Ctrl+C to stop both servers"
echo ""

# Start both servers using concurrently if available, otherwise provide instructions
if command -v concurrently &> /dev/null; then
    concurrently "cd server && npm start" "npm run dev"
else
    echo "⚠️  'concurrently' not found. Please install it with:"
    echo "   npm install -g concurrently"
    echo ""
    echo "Or run these in separate terminals:"
    echo "   Terminal 1: cd server && npm start"
    echo "   Terminal 2: npm run dev"
fi
