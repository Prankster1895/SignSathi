const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const collection = require("./config"); // Assuming config.js exports the collection

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log("Database connected successfully");

        // Fetch data from MongoDB Atlas
        const users = await collection.find({}).exec();
        console.log("Fetched users:", users);

        // Send email
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Assuming you want to use Gmail SMTP
            auth: {
                user: 'signsathi.reach@gmail.com', // Your Gmail email address
                pass: 'vlzw stjx ajpd lfpm' // Your Gmail password
            }
        });

        // Construct email message
        const mailOptions = {
            from: 'dyuti.dasgupta2004@gmail.com', // Your Gmail email address
            to: 'signsathi.reach@gmail.com', // Your email address to receive the email
            subject: 'Fetched Users Data',
            text: `Fetched users data:\n${JSON.stringify(users, null, 2)}`
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });
