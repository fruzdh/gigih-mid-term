const { getAllVideoThumbnailService } = require("../services/video");

const getAllVideoThumbnailController = async (req, res) => {
  try {
    const data = await getAllVideoThumbnailService();

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

module.exports = { getAllVideoThumbnailController };
