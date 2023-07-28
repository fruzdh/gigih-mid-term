const express = require("express");
const { getProductByVideoIdController } = require("../controllers/product");

const productRouter = express.Router();

productRouter.get("/video/:video_id/product", getProductByVideoIdController);

module.exports = productRouter;
