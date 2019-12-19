const express = require('express');
const router = express.Router();

const users = require('./users.js');
const products = require('./products.js');


/* User Router */
router.get("/users", users.getUser);
router.get("/users/:_id", users.getUser);
router.post("/users", users.postUser);
router.put("/users/:userId", users.putUser);
router.delete("/users/:userId", users.deleteUser);

/* product Router */
router.get("/products", products.getProduct);
router.get("/products/:id", products.getProductId);
router.post("/products", products.postProduct);
router.put("/products/:productId", products.putProduct);
router.delete("/products/:productId", products.deleteProductId);


module.exports = router
