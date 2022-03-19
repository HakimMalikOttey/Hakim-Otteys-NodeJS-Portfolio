require('dotenv').config();
const express = require("express");
const ejs = require("ejs");
const experience = require("./classes/experience");
const skills = require("./classes/skills");
const projects = require("./classes/projects");
const aboutMe = require("./classes/aboutMe");
const nodemailer = require('nodemailer');
const bodyparser = require('body-parser');
const fetch = require('isomorphic-fetch');
const app = express();
const PORT = process.env.PORT || 3000;
app.set('view engine','ejs');
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.get("/",function(req,res){
  res.render("main",{
    siteKey:process.env.SITE_KEY,
    experience:experience,
    skills:skills,
    projects:projects,
    aboutMe: aboutMe,

  });
});
app.post("/verify",function(req,res){
  var secret = process.env.SECRET_KEY;
  var siteKey = req.body.token;
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${siteKey}`;
  fetch(url, {
    method: 'post'
})
    .then(response => response.json())
    .then(google_response => res.json({ google_response }))
    .catch(error => res.json({ error }));
});
app.post('/send',function (req,res){
  var etheral = process.env.ETHEREAL_PASS;
  const output = `<p> You have a new contact request</p>
  <h3>Contact Details</h3>
  <ul>
  <li>Name:${req.body.name}</li>
  <li>Email:${req.body.email}</li>
  <li>Subject:${req.body.subject}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.body}</p>
  `;
  let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  requireTLS:true,
  auth: {
    user: 'hakimotteybusiness@gmail.com', // generated ethereal user
    pass: `${etheral}`, // generated ethereal password
  },
  tls:{
    rejectUnauthorized: false,
    ciphers:"SSLv3"
  }
});

let mailOptions = {
  from: `Hakims Portfolio Website" <hakimotteybusiness@gmail.com>`, // sender address
  to: `hakimotteybusiness@gmail.com,${req.body.email}`, // list of receivers
  subject: `${req.body.subject}`, // Subject line
  text: `${req.body.body}`, // plain text body
  html: output, // html body
};
transporter.sendMail(mailOptions, function (error,info){
  if(error){
    return console.log(error);
  }
  console.log('Message sent: %s',info.messageId);
  console.log('Preview URL:%s',nodemailer.getTestMessageUrl(info));
  res.send("good job");
});
});
app.listen(PORT, function() {
  console.log("Server started on port 3000");
});
