const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
  name: String,
  text: String,
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = News;
 