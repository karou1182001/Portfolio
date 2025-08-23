import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

dotenv.config();

// 3) Initialize Express
const app = express();

// 4) Global middleware
// 4a) Helmet: sets secure HTTP headers (against XSS, clickjacking, etc.)
app.use(helmet());

// 4b) CORS: allow requests from frontend (adjust origin if needed)
app.use(cors({
  origin: process.env.CORS_ORIGIN || "http://localhost:5173",
}));

// 4c) Parse JSON body
app.use(express.json());

// 4d) Rate limiting: max 10 requests per minute per IP for /contact
const contactLimiter = rateLimit({
  windowMs: 60 * 1000,  // 1 minute
  max: 3,              // limit each IP to 3 requests per windowMs
  message: { code: 429, status: "Too many requests, please try again later." }
});

// 5) Nodemailer transport (Gmail with App Password)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify SMTP connection at startup
transporter.verify()
  .then(() => {
    console.log("SMTP ready: connected to Gmail");
  })
  .catch(err => {
    console.error("SMTP error:", err);
  });

// 6) Contact endpoint (with limiter applied)
app.post("/contact", contactLimiter, async (req, res) => {
  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ code: 400, status: "Missing fields" });
    }

    await transporter.sendMail({
      from: `"Portfolio" <${process.env.EMAIL_USER}>`, 
      to: process.env.EMAIL_TO || process.env.EMAIL_USER, 
      subject: "Contact Form Submission - Portfolio",
      replyTo: email, 
      text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br>${message.replace(/\n/g,'<br>')}</p>`,
    });

    return res.status(200).json({ code: 200, status: "Message Sent" });
  } catch (err) {
    console.error("Mail error:", err);
    return res.status(500).json({ code: 500, status: "Error sending email" });
  }
});

// 7) Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on :${PORT}`));
