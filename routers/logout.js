const router = require('express').Router();

router.get('/', (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.sendStatus(500);

    res.clearCookie(req.app.get('cookieName'));

    return res.redirect('/');
  });
});

module.exports = router;
