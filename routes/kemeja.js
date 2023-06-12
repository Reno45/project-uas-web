const express = require("express");
const router = express.Router();
const Kemeja = require("../Models/Kemeja");

// Import verifyToken
const verifyToken = require("../config/verifyToken");

// create api for kemeja
router.post("/", verifyToken, async (req, res) => {
  // tampung dlu input kemeja
  const kemejaPost = new Kemeja({
    nama: req.body.nama,
    jenis: req.body.jenis,
    harga: req.body.harga,
  });

  // simpan data dengan try cacth
  try {
    //simpan data nya
    const kemeja = await kemeja.save();
    //beri response
    res.json(kemeja);
  } catch (error) {
    res.json({ massege: error });
  }
});

//Read
router.get("/", verifyToken, async (req, res) => {
  try {
    const kemeja = await Kemeja.find();
    res.json(kemeja);
  } catch (error) {
    res.json({ message: error });
  }
});

router.put("/:kemejaId", async (req, res) => {
  const data = {
    nama: req.body.nama,
    jenis: req.body.jenis,
    harga: req.body.harga,
  };

  try {
    const kemeja = await Kemeja.updateOne({ _id: req.params.kemejaId }, data);
    res.json(kemeja);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/:kemejaId", async (req, res) => {
  try {
    const kemeja = await Kemeja.deleteOne({
      _id: req.params.kemejaId,
    });
    res.json(kemeja);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
