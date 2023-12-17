const router = require('express').Router();

router.get('/dashboard', async (req, res) => {
  try {
    res.render('dashboard', { posts: });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Add other routes as needed

module.exports = router;
