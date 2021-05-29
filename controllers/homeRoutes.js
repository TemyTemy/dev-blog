const router = require('express').Router();


router.get('/', async (req, res) => {
  try {
    res.render('homepage');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', async (req, res) => {
  try {
    res.render('dashboard');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/new-post', async (req, res) => {
  try {
    res.render('newpost');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res) => {
  try {
    res.render('displaypost');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id/edit', async (req, res) => {
  try {
    res.render('editpost');
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
