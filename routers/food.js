const router = require('express').Router();
const checkAuth = require('../middlware/authMW');
const { Food } = require('../db/models');

router.get('/', checkAuth, (req, res) => {
  const shaurma = Food.findAll();
  res.render('food', { shaurma, user: req.session.user?.id });
});
module.exports = router;
