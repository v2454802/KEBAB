const router = require('express').Router();
const { Food } = require('../db/models');

router.get('/', async (req, res) => {
  res.render('courier', { user: req.session.user?.id });
});
router.post('/', async (req, res) => {
  const { addShaurma, addPrice } = req.body;
  const { delShaurma, delPrice } = req.body;
  if (addShaurma && addPrice) {
    try {
      const shawa = Food.create({ name: addShaurma, price: addPrice });
      res.sendStatus(201);
    } catch (error) {
      console.log('Error', error);
    }
  }
  if (delShaurma && delPrice) {
    try {
      Food.destroy({ where: { name: delShaurma, price: delPrice } });
      res.sendStatus(201);
    } catch (error) {
      console.log('ERRROR', error);
    }
  }
});

module.exports = router;
