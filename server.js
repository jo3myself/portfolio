// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
// var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;


var nodemailer = require("nodemailer");
var smtpTransport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  auth: {
      user: "jo3UCI@gmail.com",
      pass: "UCIbootcamp!"
  }
});

app.get('/send',function(req,res){
  var mailOptions={
      to : "hartono@myself.com",
      subject : "Website Portfolio",
      text : req.query.text
  }
  smtpTransport.sendMail(mailOptions, function(error, response){
   if(error){
          console.log(error);
      res.end("error");
   }else{
          console.log("Email sent");
      res.end("sent");
       }
});
});


// Static directory
app.use(express.static("public"));

var routes = require("./controllers/controller.js");
app.use("/", routes);

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

