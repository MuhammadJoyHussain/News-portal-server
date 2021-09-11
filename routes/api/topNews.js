const express =  require('express');
const router = express.Router();

const TopNews = require('../../models/TopNews');

router.get('/', (req, res) => {
    TopNews.find()
    .then(news => res.json(news))
});

router.post('/', (req, res) => {
    const newNews = new TopNews({
        title: req.body.title,
        description: req.body.description,
        img: req.body.img
    });
    newNews.save().then(news => {
        res.json(news)
    })
});

module.exports = router;