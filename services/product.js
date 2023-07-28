const NotFoundError = require("../helpers/error/notFoundError");
const { findVideoById } = require("../repositories/video");
const { findProductByIds } = require("../repositories/product");

const getProductByVideoIdService = async (videoId) => {
  const video = await findVideoById(videoId);
  if (video === null) {
    throw new NotFoundError("video not found");
  }

  const productIds = video["productIds"];
  const data = await findProductByIds(productIds);
  const result = data.map(({ _id, title, price, url }) => {
    return {
      product_id: _id,
      link_product: url,
      title: title,
      price: price,
    };
  });

  return result;
};

module.exports = { getProductByVideoIdService };
