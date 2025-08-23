# Portfolio – React + Vite + Tailwind + Express/Nodemailer

This project is a **personal portfolio** built with **React (Vite) + Tailwind CSS** on the frontend and an **Express server** in Node.js that sends emails with **Nodemailer**.  
It includes **Helmet** (security headers), **express-rate-limit** (anti-spam), **CORS**, and **dotenv** for environment variables.

---

## 🚀 Tech Stack

**Frontend**
- React + Vite
- Tailwind CSS (v4)
- lucide-react (icons)

**Backend**
- Node.js + Express
- Nodemailer (SMTP Gmail with App Password)
- Helmet (security headers)
- express-rate-limit (rate limiting)
- CORS
- dotenv (environment variables)

---

## 📁 Project Structure

├─ frontend/ # Vite/React/Tailwind app
│ ├─ src/
│ ├─ index.html
│ └─ .env.local # VITE_API_URL
└─ server/ # Express API
├─ server.js # (ESM with import)
└─ .env # EMAIL_* / CORS_ORIGIN / PORT

## 🔧 Setup

### 1) Backend environment variables (`server/.env`)
> **Do not commit this file to GitHub**. Use a `.env.example` without secrets.

```ini
PORT=5000
CORS_ORIGIN=http://localhost:5173

EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password   # NOT your normal password
EMAIL_TO=your-destination@domain.com # optional; defaults to EMAIL_USER

```


How to get a Gmail App Password

Enable 2-Step Verification in your Google account.

In Security → App passwords, create a new one for “Mail” (name: “Nodemailer”).

Copy the 16-character code (without spaces) into EMAIL_PASS.

2) Frontend environment variables (frontend/.env.local)


VITE_API_URL=http://localhost:5000
In production, change VITE_API_URL to your deployed backend URL.


▶️ Running locally
Backend
cd server
npm install
# optional in dev:
npm install --save-dev nodemon

# start the server
node server.js
# or with nodemon:
npx nodemon server.js


You should see:

SMTP ready: connected to Gmail
Server running on :5000

Frontend
cd frontend
npm install
npm run dev


Visit: http://localhost:5173

https://www.youtube.com/watch?v=ifOJ0R5UQOc
