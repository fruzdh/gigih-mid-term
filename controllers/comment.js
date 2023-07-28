const RequestError = require("../helpers/error/requestError");
const {
  getCommentByVideoIdService,
  postCommentService,
} = require("../services/comment");

const getCommentByVideoIdController = async (req, res) => {
  try {
    const { video_id } = req.params;
    const data = await getCommentByVideoIdService(video_id);

    res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (e) {
    console.log(e);
    res.status(e.statusCode || 500).json({
      status: "fail",
      message: e.statusCode ? e.message : "something wrong from our side",
    });
  }
};

const postCommentController = async (req, res) => {
  try {
    const { video_id } = req.params;
    const { username, comment } = req.body;

    if (typeof username !== "string") {
      throw new RequestError("username must be string");
    }

    if (username === "") {
      throw new RequestError("username cannot be empty");
    }

    if (typeof comment !== "string") {
      throw new RequestError("comment must be string");
    }

    if (comment === "") {
      throw new RequestError("comment cannot be empty");
    }

    const data = await postCommentService(video_id, username, comment);

    res.status(201).json({
      status: "created",
      data: data,
    });
  } catch (e) {
    console.log(e);
    res.status(e.statusCode || 500).json({
      status: "fail",
      message: e.statusCode ? e.message : "something wrong from our side",
    });
  }
};

module.exports = { getCommentByVideoIdController, postCommentController };
