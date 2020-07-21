const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.post('/send', (req, res) => {
  console.log(req.body);

  const output = `
        <p>Un nouveau message vient d'arriver !</p>
        <h3>Détails</h3>
        <ul>
            <li>Nom: ${req.body.nom}</li>
            <li>Prénom: ${req.body.prenom}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message:</h3>
        <p>${req.body.message}</p>
        `;

  // create reusable transporter object using the default SMTP transport

  async function mail() {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'webdevkevtest@gmail.com', // generated ethereal user
        pass: 'Kqbx9jx6!', // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `Site de Gilles SIMEON <${req.body.email}>`, // sender address
      to: 'webdevkevtest@gmail.com', // list of receivers
      subject: 'Vous avez un nouveau message', // Subject line
      html: output, // html body
    });

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // verify connection configuration
    // transporter.verify(function (error, success) {
    //   if (error) {
    //     console.log(error);
    //   } else {
    //     console.log('Server is ready to take our messages');
    //   }
    // });
  }
  mail().catch(console.error);
});

app.listen(5000, () => console.log('server started at port 5000'));
