const nodemailer = require('nodemailer');

// Function to send email
const sendEmail = async (name, email, Mob, Org, Pos) => {
    try {
        // Create a nodemailer transporter
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Assuming you want to use Gmail SMTP
            auth: {
                user: 'signsathi.reach@gmail.com', // Your Gmail email address
                pass: 'vlzw stjx ajpd lfpm' // Your Gmail password
            }
        });

        // Email message options
        const mailOptions = {
            from: email, // Your Gmail email address
            to: 'signsathi.reach@gmail.com', // Your Gmail email address
            subject: 'New message from website',
            text: `
            Name: ${name} 
            Email: ${email}\n
            Phone Number: ${Mob}\n
            Organisation: ${Org}
            Position: ${Pos}\n
            `
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return 'Email sent successfully';
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

module.exports = { sendEmail };
