const express=require('express');
const path=require("path");
const bcrypt=require("bcrypt");
const bodyParser = require('body-parser');
const { sendConfirmationEmail } = require('./nodemailer');
const nodemailer = require("nodemailer");
const { sendEmail } = require('./email');
const app=express();
const mongoose = require("mongoose");
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({ extended: true }));
const port=4200;
const collection=require("./config")
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'views')));

app.get("/",(req,res)=>{
    res.render("home")
})
app.get("/",(req,res)=>{
    res.render("login")
})
app.get("/Signup",(req,res)=>{
    res.render("signup")
})
app.post("/Signup",async (req,res)=>{
    const data={
        name:req.body.Username,
        email:req.body.Mailid,
        Mob:req.body.Mob,
        Org:req.body.Org,
        Pos:req.body.Pos
    }
    try {
        const userData = await collection.insertMany(data);
        console.log(userData);
        await sendConfirmationEmail(data.email);
        res.redirect('/');
        res.render("home", { userCreated: true });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error creating user");
    }
});
app.get("/contact",(req,res)=>{
    res.render("contact")
})
app.post('/send-email', async (req, res) => {
    // Retrieve form data
    const { firstName, lastName, email, phoneNumber, message } = req.body;

    try {
        // Send email
        const result = await sendEmail(firstName, lastName, email, phoneNumber, message);
        res.redirect("/");
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error sending email');
    }
});

app.listen(port,()=>{
    console.log("Server Started")
})

