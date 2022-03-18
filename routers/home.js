const router = require('express').Router();
const { User } = require('../db/models');

router.get('/', async (req, res) => {
  if (req.session.user?.id) {
    const id = await req.session.user.id;
    const user = await User.findOne({ where: { id } });
    if (user.role === 'u') {
      return res.render('home', { user: req.session.user?.id });
    }
    if (user.role === 'c') {
      return res.render('courier', { user: req.session.user?.id });
    }
  }
  return res.render('home');
});

module.exports = router;
