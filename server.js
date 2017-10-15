// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
// var http = require("http");
// var fs = require("fs");
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

// Create our server
// var server = http.createServer(handleRequest);
// // Create a function for handling the requests and responses coming into our server
// function handleRequest(req, res) {
//   // Here we use the fs package to read our index.html file
//   fs.readFile(__dirname + "/index.html", function(err, data) {
//     // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
//     // an html file.
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.end(data);
//   });
// }
// Static directory
app.use(express.static("public"));

require("./routes/html-routes.js")(app);

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

