const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  author: {
    type: String
  },
  title: {
      type: String,
      required: true
  },
  journal: {
    type: String
  }, 
  year: {
    type: String
  },
  volume: {
    type: String
  },
  number:{
    type:String
  },
  pages:{
    type:String
  }
});

module.exports = Article = mongoose.model('user', ArticleSchema);
