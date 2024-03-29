const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "signsathi.reach@gmail.com",
        pass: "vlzw stjx ajpd lfpm"
    }
});

async function sendConfirmationEmail(email) {
    const mailOptions = {
        from: "signsathi.reach@gmail.com",
        to: email,
        subject: "Confirmation Email",
        html: "<p>Thank you for registering with us!</p><p>Please confirm your email address to complete the registration.</p>"
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Confirmation email sent successfully to:", email);
    } catch (error) {
        console.error("Error sending confirmation email:", error);
        throw new Error("Failed to send confirmation email");
    }
}
async function sendUserDataEmail(userData) {
    // Create transporter
    let transporter = nodemailer.createTransport({
        // Your transporter configuration
    });

    // Send mail with defined transport object
    let info = await transporter.sendMail({
        from: "dyuti.dasgupta2004@gmail.com", // Sender address
        to: "signsathi.reach@gmail.com", // Your email address
        subject: "New User Registration", // Subject line
        // Email body with user data
        text: `New user registered with the following data:\nName: ${userData.name}\nEmail: ${userData.email}\nMobile: ${userData.Mob}\nOrganization: ${userData.Org}\nPosition: ${userData.Pos}`,
    });

    console.log("User data email sent: ", info.messageId);
}

module.exports = { sendConfirmationEmail,sendUserDataEmail };
