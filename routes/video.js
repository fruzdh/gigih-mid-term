const express = require("express");
const { getAllVideoThumbnailController } = require("../controllers/video");

const videoRouter = express.Router();

videoRouter.get("/video/thumbnail", getAllVideoThumbnailController);

module.exports = videoRouter;
