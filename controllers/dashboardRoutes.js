const router = require('express').Router();
const { User, PostPet, Comment } = require('../models');

router.get ('/', (req, res) => {
    PostPet.findAll({
        attributes: [
            'id',
            'title',
            'description',
            'date_created',
            'image',
            'user_id',
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'postpet_id', 'user_id', ],
                include: {
                    model: User,
                    attributes: ['user_name']
                }
            },
            {
                model: User,
                attributes: ['user_name']
            }
        ]
    })
    .then(PostPetData => res.render('dashboard', { postpets: PostPetData, loggedIn: true }))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/login', (req, res) => {


    res.render('login');
})

module.exports = router;