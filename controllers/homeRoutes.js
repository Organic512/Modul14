const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    res.render('home', { posts: });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
