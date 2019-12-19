const mongoose = require('mongoose')
const User = require('./user.js')
const Product = require('./product.js')

const uri = process.env.DATABASE_URL || "mongodb://localhost:27017/BellusShopDB"

const connectDb = () => {
  return mongoose.connect(uri, { useNewUrlParser: true });
};

module.exports = {
  connectDb,
  models: {
    User,
    Product,
  }
}
