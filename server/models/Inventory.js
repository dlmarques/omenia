const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  itemName: {
    type: String,
    required: true,
  },
  itemSkill: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  boost: {
    type: Number,
    required: true,
  },
  keyname: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Inventory", inventorySchema);
