const mongoose = require("mongoose");
const { type } = require("os");

const addTocart = mongoose.Schema(
  {
    productId: {
      ref: "product",
      type: String,
    },
    quantity: Number,
    userId: String,
  },
  {
    timestamps: true,
  }
);

const addTocartModel = mongoose.model("addTocart", addTocart);

module.exports = addTocartModel;
