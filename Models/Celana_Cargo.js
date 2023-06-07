// schema Celana Cargo
const mongoose = require("mongoose");
const router = require("../routes/celana_cargo");

const Celana_CargoSchema = mongoose.Schema({
  npm: {
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

module.exports = mongoose.model("Celana_Cargo", Celana_CargoSchema);
