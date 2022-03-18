const router = require('express').Router();
const { Food } = require('../db/models');

router.get('/', async (req, res) => {
  res.render('courier', { user: req.session.user?.id });
});
router.post('/', async (req, res) => {
  const { shaurma, price } = req.body;
  console.log(req.body);
  if (shaurma && price) {
    try {
      const shawa = Food.create({ name: shaurma, price });
      res.sendStatus(201);
    } catch (error) {
      console.log('Error', error);
    }
  }
});


module.exports = router;
