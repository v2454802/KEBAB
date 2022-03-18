const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('courier');
});

module.exports = router;
