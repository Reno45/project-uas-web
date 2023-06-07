// schema Hoodie
const mongoose = require("mongoose");
const router = require("../routes/hoodie");

const HoodieSchema = mongoose.Schema({
  nidn: {
    type: String,
    require: true,
  },
  nama: {
    type: String,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Hoodie", HoodieSchema);
