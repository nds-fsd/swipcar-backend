const express = require('express');
require('dotenv').config();

const app = express();
const cors = require('cors');

const bodyParser = require('body-parser');
const configureSockets = require('./socket');

app.use(cors());

const server = app.listen(process.env.PORT, () => {
  console.log('server is running on port', server.address().port);
});

const { configSecurity, authRouter } = require('./security/jwt');
const appRouter = require('./router');

configSecurity(app);
require('./socket');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', appRouter);
app.use('/', authRouter);
