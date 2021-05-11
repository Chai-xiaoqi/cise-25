const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  SEpractice: {
      type: String,
      required: true
  },
  claim: {
    type: String,
    required: true
  }, 
  support: {
    type: String,
    required: true
  },
  published_date: {
    type: String
  },
  content:{
    type:String
  }
});

module.exports = Book = mongoose.model('book', BookSchema);