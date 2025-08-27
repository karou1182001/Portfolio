# Portfolio – React + Vite + Tailwind + EmailJS

This project is a **personal portfolio** built with **React (Vite) + Tailwind CSS** on the frontend and an **Express server** in Node.js that sends emails with **Nodemailer** and EmailJS (both options available in portfolio).  
It includes  **dotenv** for environment variables.

---

## 🚀 Tech Stack

**Frontend**
- React + Vite
- Tailwind CSS (v4)
- lucide-react (icons)
- EmailJS (@emailjs/browser)

Infrastructure
- Vercel (deploy & hosting)

**Backend** (Optional, but included in the repo. In the end, I switched to EmailJS.)
- Node.js + Express
- Nodemailer (SMTP Gmail with App Password)
- Helmet (security headers)
- express-rate-limit (rate limiting)
- CORS
- dotenv (environment variables)

---

## 📁 Project Structure

```bash
├─ frontend/ # Vite/React/Tailwind app
│ ├─ src/ #All components
│ ├─ index.html
│ └─ .env.local # VITE_API_URL and emailJS
└─ server/ # Express API
├─ server.js # (ESM with import)
└─ .env # EMAIL_* / CORS_ORIGIN / PORT
```

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

# EmailJS (public by design, but keep them in .env for cleanliness)
```bash
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxx
```

Usage in code:
```bash
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

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

## Credits: 

Icons made by [Flaticon](https://www.flaticon.com/).





