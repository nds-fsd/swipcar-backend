const jwtMiddleware = require('express-jwt');
const express = require('express');
const jwt = require('jsonwebtoken');
const { User } = require('../mongo');

const jwtSecret = process.env.JWT_SECRET;

const jwtVerifier = (token, callback) => {
  jwt.verify(token, jwtSecret, callback);
};

const authRouter = express.Router();

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (!user)
        return res
          .status(400)
          .json({ error: { email: 'This email is not registered' } });

      if (!user.comparePassword(password))
        return res.status(400).json({ error: { password: 'Wrong password' } });
      res.status(200).json({
        token: user.generateJWT(),
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

authRouter.post('/register', (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user)
        return res
          .status(400)
          .json({ error: { email: 'This email is already registered.' } });

      const newUser = new User(req.body);
      newUser
        .save()
        .then((user) => {
          res.status(200).json({
            token: user.generateJWT(),
            user: {
              id: user._id,
              name: user.name,
              email: user.email,
              role: user.role,
            },
          });
        })
        .catch((err) => res.status(500).json({ message: err.message }));
    })
    .catch((err) =>
      res.status(500).json({ success: false, message: err.message })
    );
});

const configSecurity = (app) => {
  app.use(
    '/',
    jwtMiddleware({ secret: jwtSecret, algorithms: ['HS256'] }).unless({
      path: [
        '/login',
        '/register',
        /^\/brand\/.*/,
        /^\/user\/.*/,
        /^\/fuel\/.*/,
        /^\/transmision\/.*/,
        /^\/carprofile\/.*/,
      ],
    })
  );
};

module.exports = {
  authRouter,
  jwtVerifier,
  configSecurity,
};
