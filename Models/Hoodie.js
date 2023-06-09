// schema Hoodie
const mongoose = require("mongoose");
const router = require("../routes/hoodie");

const HoodieSchema = mongoose.Schema({
  nama: {
    type: String,
    require: true,
  },
  ukuran: {
    type: String,
    required: true,
  },
  harga: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Hoodie", HoodieSchema);
