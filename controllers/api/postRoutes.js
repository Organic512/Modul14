const router = require('express').Router();

router.post('/', async (req, res) => {
  try {

    res.json();
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
