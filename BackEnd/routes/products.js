// get all products & get product by category.
getProduct = (req, res, next) => {
  var query;
  if(req.query.category) {
    query = req.models.Product.find({ category: req.query.category })
  } else {
    query = req.models.Product.find()
  }
  query.exec().then((product) => {
    return res.send(product);
  }).catch((error) => next(error))
}

// get product by id.
getProductId = (req, res, next) => {
  req.models.Product.findById(req.params.id).then((product) => {
    return res.send(product);
  })
}

// post/add product.
postProduct = (req, res, next) => {
  req.models.Product.create({
    category: req.body.category,
    subCategory1: req.body.subCategory1,
    subCategory2: req.body.subCategory2,
    name: req.body.name,
    description: req.body.description,
    material: req.body.material,
    brand: req.body.brand,
    size: req.body.size,
    color:req.body.color,
    price:req.body.price,
    isRea:req.body.isRea,
    reaPrice:req.body.reaPrice,
    imagePath: req.body.imagePath,
    bigImagePath: req.body.bigImagePath,
    icon1: req.body.icon1,
    icon2: req.body.icon2,
    icon3: req.body.icon3
  }).then((product) => {
    return res.status(201).send(product)
  }).catch((error) => {
    next(error)
  })
}

// put/update product
putProduct = (req, res, next) => {
  req.models.Product.updateOne(
    { _id: req.params.productId },
    {
      category: req.body.category,
      subCategory1: req.body.subCategory1,
      subCategory2: req.body.subCategory2,
      name: req.body.name,
      description: req.body.description,
      material: req.body.material,
      brand: req.body.brand,
      size: req.body.size,
      color:req.body.color,
      price:req.body.price,
      isRea:req.body.isRea,
      reaPrice:req.body.reaPrice,
      imagePath: req.body.imagePath,
      bigImagePath: req.body.bigImagePath,
      icon1: req.body.icon1,
      icon2: req.body.icon2,
      icon3: req.body.icon3
    },
    {
      new: true,
      upsert: true,
      runvalidators: true,
    }
  ).then((status) => {
    console.log("status: ", status)
    if (status.upserted) {
      res.status(201)
    } else if (status.nModified) {
      res.status(200)
    } else {
      res.status(204)
    }
    res.send()
  }).catch((error) => next(error))
}

// delete product
deleteProductId = (req, res, next) => {
  req.models.Product.findByIdAndRemove(req.params.productId).then((product) => {
    return res.status(200).send(product)
  }).catch((error) => {
    next(error)
  })
}

module.exports = {
  getProduct,
  getProductId,
  postProduct,
  putProduct,
  deleteProductId
}
