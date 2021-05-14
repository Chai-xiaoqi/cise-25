const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  
  user: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String
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
  journal: {
    type: String
  },
  volume: {
    type: String
  },
  number: {
    type: String
  },
  pages: {
    type: String
  },
 eprint: {
    type: String
  },
  peprinttype: {
    type: String
  },
  eprintclass: {
    type: String
  },
  annote: {
    type: String
  },
  publisher: {
    type: String
  },
  published_year: {
    type: String,
    required: true
  },
  published_month: {
    type: String
  },
  content:{
    type:String
  }
});

module.exports = Book = mongoose.model('book', BookSchema);