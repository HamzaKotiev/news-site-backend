const Category = require('../models/Category.model');

const News = require('../models/News.model');



module.exports.newsController = {
    postNews: (req, res) => {
        News.create({
            title: req.body.title,
            text: req.body.text,
            category: req.body.category
        }).then((news) => {
            res.json(news)
        })
    }
}
