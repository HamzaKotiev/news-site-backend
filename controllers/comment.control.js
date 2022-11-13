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
    },
    deleteComment: (req, res) => {
        Comment.findByIdAndDelete(req.params.commentId).then(() => {
            res.json('коммента больше нет !')
        })
    },
    getAllCommentByIdcat: (req, res) => {
        Comment.find({news: req.params.newsId}, {}).then((news) => {
            res.json(news)
        })
    }
    
}