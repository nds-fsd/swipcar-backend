const nodemailer = require('nodemailer');
const ejs = require('ejs');
const SignUpHTML = require('./htmlTemplates/signUpTemplate.js');
const ReservationHTML = require('./htmlTemplates/newReservationTemplate.js');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  port: 465, // true for 465, false for other ports
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.ADMIN_EMAIL,
    pass: process.env.ADMIN_EMAIL_PASSWORD
  },
  secure: true
});

function wrapedSendMail(mailOptions) {
  return new Promise((resolve, reject) => {
    let totalMailOptions = { ...mailOptions, from: process.env.ADMIN_EMAIL };
    transporter.sendMail(totalMailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        resolve(info);
      }
    });
  });
}

const sendSignUpEmail = (data, toEmail) => {
  const html = ejs.render(SignUpHTML, { data });
  const mailData = {
    to: toEmail,
    html,
    subject: 'Bienvenido a Ecocars'
  };
  return wrapedSendMail(mailData);
};

const sendNewRentingEmail = (data, toEmail) => {
  const html = ejs.render(ReservationHTML, { data });
  const mailData = {
    to: toEmail,
    html,
    subject: 'Nueva reserva de renting'
  };
  return wrapedSendMail(mailData);
};

module.exports = {
  sendSignUpEmail,
  sendNewRentingEmail
};
