const Category = require('../models/Category.model');



module.exports.categoriesController = {
  postCategory: (req, res) => {
    Category.create({
        name: req.body.name 
    }).then((cat) => {
        res.json(cat)
    })
  },
  deleteCategory: (req, res) => {
    Category.findByIdAndDelete(req.params.categoryId).then(() => {
      res.json('Катигоря больше не ма')
    })
  },
  getAllCategory: (req, res) => {
    Category.find({}).then((news) => {
      res.json(news)
    })
  }



};