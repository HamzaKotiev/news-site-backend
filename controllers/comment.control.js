const Comment = require('../models/Commentarias.model');

module.exports.commentController = {
    postCommet: (req, res) => {
        Comment.create({
            name: req.body.name,
            text: req.body.text,
            news: req.body.news

       }).then((comment) => {
            res.json(comment)
        })
    }
    
}