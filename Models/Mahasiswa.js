// schema Mahasiswa
const mongoose = require("mongoose");
const router = require("../routes/mahasiswa");

const MahasiswaSchema = mongoose.Schema({
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

module.exports = mongoose.model("Mahasiswa", MahasiswaSchema);
