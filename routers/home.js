const router = require('express').Router();

router.get('/', async (req, res) => {
  if (req.session.user) {
    return res.render('home', { user: req.session.user?.id });
  }
  return res.render('home');
});

module.exports = router;
