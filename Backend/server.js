import express from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
dotenv.config();
const port = 4000;

// Enable CORS for the frontend at localhost:5173
const corsOptions = {
  origin: "http://localhost:5173", // Allow only frontend on localhost:5173
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));  // Apply the CORS options
app.use(express.json());

// Create a Nodemailer transporter using Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",  // Correct SMTP host for Gmail
  port: 587,  // Use 465 if SSL is preferred
  secure: false,  // Set to true if using port 465
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS,  // Use the generated app password if using 2FA
  },
});


app.post("/api/send-quotation", (req, res) => {
  const { email, quotationDetails } = req.body;

  if (!email || !quotationDetails) {
    return res.status(400).json({ success: false, message: "Email and quotation details are required." });
  }

  const mailOptions = {
    from: process.env.GMAIL_USER,  // Gmail sender email
    to: email,  // Send quotation to the user's email
    subject: "Your Requested Quotation",
    text: `
      Hello,

      Thank you for requesting a quotation. Here are the details:

      ${quotationDetails}

      We appreciate your interest in our services!

      Best regards,
      suraj
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error details:', error);
      return res.status(500).json({ success: false, message: "Error sending email." });
    }
    console.log("Email sent: " + info.response);
    res.status(200).json({ success: true, message: "Quotation sent successfully!" });
  });
});

// Optional: Simple GET route
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start the server on port 4000
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
