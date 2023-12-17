const router = require('express').Router();

router.post('/signup', async (req, res) => {
  try {
    res.json();
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    res.json();
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
