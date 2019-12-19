//feedback on productSchema!
mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true
  },
  subCategory1: {
    type: String,
    required: true
  },
  subCategory2: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  material:{
    type: String,
  },
  size:{
    type: String,
  },
  color:{
    type: String,
  },
  imagePath: {
    type: String,
    required: true
  },
  bigImagePath:{
    type: String
  },
  icon1: {
    type: String
  },
  icon2: {
    type: String
  },
  icon3: {
    type: String
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;