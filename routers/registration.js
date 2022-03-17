const router = require('express').Router();
const sha256 = require('sha256');
const { User } = require('../db/models');

router.get('/', async (req, res) => {
  res.render('registration');
});

router.post('/', async (req, res) => {
  const {
    login, email, pass, role,
  } = req.body;
  console.log(req.body);
  if (login && email && pass && role) {
    try {
      const user = User.create({
        name: login, email, password: sha256(pass), role,
      });

      res.sendStatus(201);
    } catch (error) {
      console.log('Error', error);
    }
  }
});

module.exports = router;
