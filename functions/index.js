// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
'use strict';
const functions  = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});

require('dotenv').config();

exports.enviarEmail = functions.https.onRequest((req, res) => {

  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '465',
    secure: 'true',
    auth: {
      user: "segufs@gmail.com",
      pass: "s3gufs@dM1n",
    }
  });

  cors(req, res, () => {
    console.log(req);
    let name = req.body['name'];
    let rg = req.body['rg'];
    let orgao = req.body['orgao'];
    let cpf = req.body['cpf'];
    let email = req.body['email'];
    let campus = req.body['campus'];
    let local = req.body['local'];
    let descricao_local = req.body['descricao_local'];
    let crime = req.body['crime'];
    let armado = req.body['armado'];
    let tipo_arma = req.body['tipo_arma'];
    let item_perdido = req.body['item_perdido'];
    let criminoso = req.body['criminoso'];

    let sendmail = {
      from: email, // Quem enviou este e-mail
      to: 'segufs@gmail.com', // Quem receberá`
      subject: 'Denuncia',  // Um assunto bacana :-)
      html: `<p>Nome: ` + name + `</p><p>Email: ` + email + `</p><p>Mensagem: ` + message + `</p>`,
    };

    return transporter.sendMail(sendmail, (error, info) => {
      if(error){
        res.json({error: error});
      }else{
        res.json({success: info.response});
      }
    });
  });
});