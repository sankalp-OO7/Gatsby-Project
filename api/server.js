const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: "gmail", // You can use other email services like SendGrid, Mailgun, etc.
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message , mobile } = req.body;

  console.log("Received data:", { name, email, message, mobile }); // Log incoming data

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER, // Replace with the owner's email
      subject: `New Contact Form Submission from ${name}`,
      html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              @media only screen and (max-width: 600px) {
                .email-container {
                  padding: 20px !important;
                }
                .header, .message-content, .footer {
                  padding: 15px !important;
                }
                .header {
                  font-size: 20px !important;
                }
                .message-content {
                  font-size: 14px !important;
                }
              }
            </style>
          </head>
          <body>
            <div class="email-container" style="font-family: 'Roboto', Arial, sans-serif; line-height: 1.8; color: #333333; background-color: #f9f9f9; padding: 30px; border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); width: 90%; max-width: 600px; margin: 0 auto;">
              <h2 class="header" style="background: linear-gradient(90deg, #ff7e5f, #feb47b); color: #ffffff; padding: 15px; border-radius: 10px; text-align: center; font-size: 24px; font-weight: bold; text-shadow: 1px 1px 2px #444;">
                New Contact Form Submission
              </h2>
              <p class="message-content" style="margin-bottom: 25px; font-size: 18px; color: #555;"><strong>Name:</strong> ${name}</p>
              <p class="message-content" style="margin-bottom: 25px; font-size: 18px; color: #555;"><strong>Mobile:</strong> ${mobile}</p>
              <p class="message-content" style="margin-bottom: 25px; font-size: 18px; color: #555;"><strong>Email:</strong> ${email}</p>
              <p class="message-content" style="margin-bottom: 20px; font-size: 18px; color: #555;"><strong>Message:</strong></p>
              <div class="message-content" style="background: linear-gradient(120deg, #a1c4fd, #c2e9fb); padding: 20px; border-radius: 8px; border: 1px solid #ddd; color: #333; font-size: 16px; box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);">
                ${message}
              </div>
              <p class="footer" style="font-size: 0.9em; color: #888; margin-top: 30px; text-align: center; font-style: italic;">
                This message was sent via the contact form on your website.
              </p>
              <p class="footer" style="text-align: center; font-size: 12px; color: #666;">
                &copy; 2024 SiteView.ai. All rights reserved.
              </p>
            </div>
          </body>
          </html>
        `,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank You for Reaching Out to SiteView!",
      html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              @media only screen and (max-width: 600px) {
                .email-container {
                  padding: 20px !important;
                }
                .header, .message-content, .footer {
                  padding: 15px !important;
                }
                .header {
                  font-size: 20px !important;
                }
                .message-content {
                  font-size: 14px !important;
                }
              }
            </style>
          </head>
          <body>
            <div class="email-container" style="font-family: 'Roboto', Arial, sans-serif; line-height: 1.8; color: #333333; background-color: #f0f8ff; padding: 30px; border-radius: 15px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); width: 90%; max-width: 600px; margin: 0 auto;">
              <h2 class="header" style="background: linear-gradient(90deg, #667eea, #764ba2); color: #ffffff; padding: 15px; border-radius: 10px; text-align: center; font-size: 24px; font-weight: bold; text-shadow: 1px 1px 2px #444;">
                Thank You for Contacting SiteView!
              </h2>
              <p class="message-content" style="margin-bottom: 25px; font-size: 18px; color: #555;">
                Hi ${name},
              </p>
              <p class="message-content" style="margin-bottom: 20px; font-size: 18px; color: #555;">
                Thank you for reaching out to us! Your message has been successfully received. We appreciate your interest in SiteView, and one of our team members will get back to you shortly to assist with your inquiry.
              </p>
              <p class="message-content" style="margin-bottom: 20px; font-size: 18px; color: #555;">
                Our dedicated team is here to provide you with the best service possible. Expect a call or email from one of our SiteView executives soon. In the meantime, feel free to explore more about our services on our website.
              </p>
              <div class="message-content" style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; border: 1px solid #ddd; color: #333; font-size: 16px; box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05); text-align: center;">
                <strong>Your satisfaction is our priority!</strong><br/>
                We are committed to helping you achieve your goals.
              </div>
              <p class="footer" style="font-size: 0.9em; color: #888; margin-top: 30px; text-align: center; font-style: italic;">
                Cheers,<br/> The SiteView Team
              </p>
              <p class="footer" style="text-align: center; font-size: 12px; color: #666;">
                &copy; 2024 SiteView.ai. All rights reserved.
              </p>
            </div>
          </body>
          </html>
        `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

 
