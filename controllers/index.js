  const apiRoutes = require('./api');

const router = require('express').Router();

router.use('/api', apiRoutes);

router.get('/main', (req, res) => {res.render('main')
});

router.get('/login', (req, res) => {res.render('login')});

module.exports = router;