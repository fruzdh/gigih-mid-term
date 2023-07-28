const { findAllVideo } = require("../repositories/video");

const getAllVideoThumbnailService = async () => {
  const data = await findAllVideo();
  const result = data.map(({ _id, urlImageThumbnail }) => {
    return {
      video_id: _id,
      url_image_thumbnail: urlImageThumbnail,
    };
  });

  return result;
};

module.exports = { getAllVideoThumbnailService };
