const express = require('express');
require('dotenv').config();

const app = express();
const cors = require('cors');

const bodyParser = require('body-parser');

const mailer = require("./mailer");

//! dev Comment
// const configureSockets = require('./socket');

app.use(cors());

const server = app.listen(process.env.PORT, () => {
  console.log('server is running on port', server.address().port);
});

//! dev Comment
// const { configSecurity, authRouter } = require('./security/jwt');


const appRouter = require('./router');

//! dev Comment
// configSecurity(app);
// require('./socket');
//! dev Comment

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', appRouter);

//! dev Comment
// app.use('/', authRouter);

//! Send Email

app.post('/signup', (req, res) => {
    const data = req.body;
    mailer.sendSignUpEmail(data, data.email).then((response) => {
      res.status(200).json(response);
    });
  });

app.post('/newreservation', (req, res) => {
    const data = req.body;
    mailer.sendNewRentingEmail(data, data.email).then((response) => {
      res.status(200).json(response);
    });
  });
