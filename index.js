const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config() // Te conectas al archivo .env

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/',()=>{
    resizeBy.send('Welcome to my forma')
})

app.post('/api/forma', (req, res) => {
    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        host:process.env.REACT_APP_HOST, //process.env.REACT_APP_nombreDeLaVariable =>process.env para ingresar a .env, REACT_APP porque en react las variables se declaran asi en .env.
        port:465,
        secure:true,
        auth:{
            user:process.env.REACT_APP_MAIL,
            pass:process.env.REACT_APP_PASS
        }
    });

    let mailOptions={
        from: data.name,
        to:process.env.REACT_APP_MAIL, // Recordar autenticar verificacion de 2 pasos y despues generar contrasena de aplicaciones en gestionar cuenta, seguridad. 
        subject:`Message from ${data.name}`,
        html:`
        <h3>Information</h3>
        <ul>
            <li>Name: ${data.name}</li>
            <li>Email: ${data.email}</li>
        </ul>
    <h3>Message:</h3>
    <p>${data.message}</p>
        `
    };

    smtpTransport.sendMail(mailOptions, (error,response)=>{
        if(error) {
            res.send(error)
        }
        else {
            res.send('Success')
        }
    })
    smtpTransport.close();
    })

// Port of listening

const PORT = process.env.PORT||3001;
app.listen(PORT,()=>{
    console.log(`Server starting at port ${PORT}`)
})