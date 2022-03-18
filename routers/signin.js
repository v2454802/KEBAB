const router = require('express').Router();
const sha256 = require('sha256');
const { User } = require('../db/models');

router.get('/', async (req, res) => {
  res.render('signin');
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  if (email && password) {
    try {
      const user = await User.findOne({ where: { email } });
      if (user) {
        if (user.password === sha256(password)) {
          req.session.user = {};
          req.session.user.id = user.id;
          res.json({ role: user.role, id: user.id });
          console.log(user.role)
        } else {
          res.json({ message: 'не правильный пароль!!!' });
        }
      } else {
        res.json({ message: 'нет такого пользователя' });
      }
    } catch (error) {
      console.log('Error', error);
    }
  }
});

module.exports = router;
