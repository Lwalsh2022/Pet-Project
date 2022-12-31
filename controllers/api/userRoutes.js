const router = require('express').Router();
const User = require('../../models/User');

// TODO: Use try/catch to catch errors
// TODO: Return the appropriate HTTP status codes

// Create a user
router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);
        // 200 status code means the request was successful
        res.status(200).json(userData);
    } catch (err) {
      // 400 status code means the server could not understand the request
        res.status(400).json(err);
    }
});

// GET all users should this be findOne or findAll?
router.get('/:name', async (req, res) => {
  try {
    const userData = await User.findOne({
        where: {
        name: req.params.name,
    },
 });
    res.json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a user

router.put('/:id', async (req, res) => {
  const userData = await User.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).catch((err) => res.json(err));
  res.json(userData);
});

// DELETE a user
router.delete('/:id', async (req, res) => {
  const userData = await User.destroy({
    where: {
      id: req.params.id,
    },
  }).catch((err) => res.json(err));
  res.json(userData);
});

module.exports = router;