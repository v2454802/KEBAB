const router = require('express').Router();
const { User } = require('../db/models/user');

router.get('/', async (req, res) => {
  res.render('registration');
});

router.post('/', async (req, res) => {
  const {
    name, email, password, role,
  } = req.body;
  if (name && email && password && role) {
    try {
      const user = await User.create({
        name, email, password, role,
      });
      res.sendStatus(201);
    } catch (error) {
      console.log('Error', error);
    }
  }
});

module.exports = router;
