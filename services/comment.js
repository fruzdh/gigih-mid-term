const NotFoundError = require("../helpers/error/notFoundError");
const { insertComment } = require("../repositories/comment");
const { findVideoById } = require("../repositories/video");

const getCommentByVideoIdService = async (videoId) => {
  const video = await findVideoById(videoId);
  if (video === null) {
    throw new NotFoundError("video not found");
  }

  const result = video["comments"].map(({ username, comment, createdAt }) => {
    return {
      username: username,
      comment: comment,
      timestamp: createdAt,
    };
  });

  return result;
};

const postCommentService = async (videoId, username, comment) => {
  const video = await findVideoById(videoId);
  if (video === null) {
    throw new NotFoundError("video not found");
  }

  const data = await insertComment(videoId, username, comment);
  const result = data["comments"].at(-1);

  return result;
};

module.exports = { getCommentByVideoIdService, postCommentService };
