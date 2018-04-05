var express = require('express');
var bodyParser = require('body-parser');
//const exphbs = require("express-handlebars");
var app = express();
var path = require('path');
//var awsmod = require('./js/awsmodule.js');
var nodeMailer = require('nodemailer');

// use bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use("/", express.static(__dirname));
app.use("/", express.static(path.join(__dirname + 'index')));
// app.use("/js", express.static(path.join(__dirname + '/js')));
// app.use("/students/css", express.static(path.join(__dirname + '/css')));
// app.use("/game-data", express.static(path.join(__dirname + '/static/games/game-data')));

app.post('/send-email', function (req, res) {
    console.log(req.body);
    let transporter = nodeMailer.createTransport({
        service:'gmail',
        auth: {
            user: 'testresourcestevens@gmail.com',
            pass: 'Stevens1870' //TODO Change this LMAO
        }
    });
    let mailOptions = {
        from: req.body.email, // sender address
        to: 'testresourcestevens@gmail.com', // list of receivers
        subject: 'Mail from website form ' + req.body.firstname,// + " " + 
        //req.body.lastname, // Subject line
        text: "FROM " + req.body.email + ":: " + req.body.message // plain text body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.sendFile(path.join(__dirname + '/static/landing-page/index.html'));
    });
});


var port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log("Server is listening on port ..." + port);
});