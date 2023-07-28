const mongoose = require("mongoose");
const Video = require("../models/video");
const RequestError = require("../helpers/error/requestError");

const insertComment = async (videoId, username, comment) => {
  if (!mongoose.isObjectIdOrHexString(videoId)) {
    throw new RequestError("invalid video id");
  }

  const newComment = {
    username: username,
    comment: comment,
  };

  const result = Video.findByIdAndUpdate(
    videoId,
    {
      $push: { comments: newComment },
    },
    { new: true }
  );

  return result;
};

module.exports = { insertComment };
