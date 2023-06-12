// schema Kemeja
const mongoose = require("mongoose");
const router = require("../routes/kemeja");

const KemejaSchema = mongoose.Schema({
  nama: {
    type: String,
    require: true,
  },
  jenis: {
    type: String,
    required: true,
  },
  harga: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Kemeja", KemejaSchema);
