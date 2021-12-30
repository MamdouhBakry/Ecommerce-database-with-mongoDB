const mongoose = require("mongoose");

const produtSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trime: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trime: true,
  },
  offer: {
    type: Number,
  },
  productPictures: [
    {
      img: {
        type: String,
      },
    },
  ],
  reviews: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      review: String,
    },
  ],
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  updatedAt: Date,
});

module.exports = mongoose.model("Product", produtSchema);
