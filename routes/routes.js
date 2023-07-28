const videoRouter = require("./video");
const commentRouter = require("./comment");
const productRouter = require("./product");

const router = [videoRouter, commentRouter, productRouter];

module.exports = router;
