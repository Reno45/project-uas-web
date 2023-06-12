// schema Celana Cargo
const mongoose = require("mongoose");
const router = require("../routes/celana_cargo");

const Celana_CargoSchema = mongoose.Schema({
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

module.exports = mongoose.model("Celana_Cargo", Celana_CargoSchema);
