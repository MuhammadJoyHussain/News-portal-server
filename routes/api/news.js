const express =  require('express');
const router = express.Router();

const News = require('../../models/News');

router.get('/', (req, res) => {
    News.find()
    .then(news => res.json(news))
});

router.post('/', (req, res) => {
    const newNews = new News({
        title: req.body.title,
        description: req.body.description
    });
    newNews.save().then(news => {
        res.json(news)
    })
});

module.exports = router;