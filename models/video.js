const mongoose = require("mongoose");
const commentSchema = require("./comment");

const videoSchema = new mongoose.Schema({
  urlImageThumbnail: {
    type: String,
    required: true,
  },
  comments: [commentSchema],
  productIds: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

module.exports = mongoose.model("Video", videoSchema);
