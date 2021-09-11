const express =  require('express');
const router = express.Router();

const TopNews = require('../../models/Bangladesh');

router.get('/', (req, res) => {
    TopNews.find()
    .then(news => res.json(news))
});

router.post('/', (req, res) => {
    const newNews = new TopNews({
        title: req.body.title,
        description: req.body.description,
        img: req.body.img,
        author: req.body.author,
        category: req.body.category
    });
    newNews.save().then(news => {
        res.json(news)
    })
});

module.exports = router;