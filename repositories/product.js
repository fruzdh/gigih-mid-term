const Product = require("../models/product");

const findProductByIds = async (productIds) => {
  const result = Product.find({
    _id: { $in: productIds },
  }).exec();

  return result;
};

module.exports = { findProductByIds };
