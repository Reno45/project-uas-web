const express = require("express");
const router = express.Router();
const Celana_Cargo = require("../Models/Celana_Cargo");

// Import verifyToken
const verifyToken = require("../config/verifyToken");

// create api for mahasiswa
router.post("/", verifyToken, async (req, res) => {
  // tampung dlu input mahasiswa
  const celana_cargoPost = new Celana_Cargo({
    nama: req.body.nama,
    jenis: req.body.jenis,
    harga: req.body.harga,
  });

  // simpan data dengan try cacth
  try {
    //simpan data nya
    const mahasiswa = await celana_cargoPost.save();
    //beri response
    res.json(celana_cargo);
  } catch (error) {
    res.json({ massege: error });
  }
});

//Read
router.get("/", verifyToken, async (req, res) => {
  try {
    const celana_cargo = await Celana_Cargo.find();
    res.json(celana_cargo);
  } catch (error) {
    res.json({ message: error });
  }
});

router.put("/:celana_cargoId", async (req, res) => {
  const data = {
    nama: req.body.nama,
    jenis: req.body.jenis,
    harga: req.body.harga,
  };

  try {
    const celana_cargo = await Celana_Cargo.updateOne(
      { _id: req.params.celana_cargoId },
      data
    );
    res.json(celana_cargo);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/:celana_cargoId", async (req, res) => {
  try {
    const celana_cargo = await Celana_Cargo.deleteOne({
      _id: req.params.celana_cargoId,
    });
    res.json(celana_cargo);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
