const nodemailer = require("nodemailer");

function sendEmail(user) {
    // Define email transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'your_email@gmail.com', // Your Gmail address
            pass: 'your_password' // Your Gmail password
        }
    });

    // Prepare email content
    const mailOptions = {
        from: user.email, // Set sender's email dynamically
        to: 'your_email@gmail.com', // Your email address
        subject: 'New User Registered',
        text: `New user registered:\n\nName: ${user.name}\nEmail: ${user.email}\nMobile: ${user.Mob}\nOrganization: ${user.Org}\nPosition: ${user.Pos}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

module.exports = sendEmail;
