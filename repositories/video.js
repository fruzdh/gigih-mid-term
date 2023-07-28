const mongoose = require("mongoose");
const Video = require("../models/video");
const RequestError = require("../helpers/error/requestError");

const findAllVideo = async () => {
  const result = Video.find();

  return result;
};

const findVideoById = async (id) => {
  if (!mongoose.isObjectIdOrHexString(id)) {
    throw new RequestError("invalid id");
  }

  const result = Video.findById(id);

  return result;
};

module.exports = { findAllVideo, findVideoById };
