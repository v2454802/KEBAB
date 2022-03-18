const router = require('express').Router();
const checkAuth = require('../middlware/authMW');
const { Food } = require('../db/models');

router.get('/', checkAuth, async (req, res) => {
  const shaurma = await Food.findAll();
  
  console.log(shaurma);
  res.render('food', { shaurma, user: req.session.user?.id });
});
module.exports = router;
