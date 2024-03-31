const nodemailer = require("nodemailer");

async function sendRegEmail(userData) {
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
            from: userData.email, // Use the user's email address as the 'from' field
            to: 'your-email@gmail.com', // Your email address to receive the email
            subject: 'New User Registration',
            text: `
                New user registered with the following details:
                Name: ${userData.name}
                Email: ${userData.email}
                Phone Number: ${userData.Mob}
                Organisation: ${userData.Org}
                Position: ${userData.Pos}
            `
        };

        // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Registration Email sent:', info.response);
        return 'Registration Email sent successfully';
    } catch (error) {
        console.error('Error sending registration email:', error);
        throw error;
    }
}

module.exports = { sendRegEmail };
