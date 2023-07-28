const { getProductByVideoIdService } = require("../services/product");

const getProductByVideoIdController = async (req, res) => {
  try {
    const { video_id } = req.params;
    const data = await getProductByVideoIdService(video_id);

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

module.exports = { getProductByVideoIdController };
