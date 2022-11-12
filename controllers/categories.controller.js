const Category = require('../models/Category.model');



module.exports.categoriesController = {
  postCategory: (req, res) => {
    Category.create({
        name: req.body.name 
    }).then((cat) => {
        res.json(cat)
    })
  },



};