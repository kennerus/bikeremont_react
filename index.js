const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/form', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Контакты</h3>
      <p>Имя: ${req.body.name}</p>
      <p>Телефон: ${req.body.phone}</p>
    `;

    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'kennerus@gmail.com',
        pass: 'gthtlfnjxyfzaeyrwbz '
      }
    });

    let mailOptions = {
      from: 'test@testacc.com',
      to: 'kennerus@gmail.com',
      replyTo: 'test@testacc.com',
      html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err)
      }

      console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
    })
  })
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listnening on port ${PORT}`);
});