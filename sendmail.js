const nodemailer = require('nodemailer');

// Function to send email
const sendRegEmail = async (Username, Mailid, Mob, Org, Pos) => {
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
            from: Mailid, // Your Gmail email address
            to: 'signsathi.reach@gmail.com', // Your Gmail email address
            subject: 'New user registered',
            text: `
                Name: ${Username} \n
                Email: ${Mailid}\n
                Phone Number: ${Mob}\n
                Organisation: ${Org}\n
                Position: ${Pos}\n
            `
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
};

module.exports = { sendRegEmail };
