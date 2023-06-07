const express = require("express");
const router = express.Router();
const Hoodie = require("../Models/Hoodie");

// create api for mahasiswa
router.post("/", async (req, res) => {
  // tampung dlu input mahasiswa
  const hoodiePost = new Hoodie({
    nama: req.body.nama,
    ukuran: req.body.ukuran,
    harga: req.body.harga,
  });

  // simpan data dengan try cacth
  try {
    //simpan data nya
    const hoodie = await hoodiePost.save();
    //beri response
    res.json(hoodie);
  } catch (error) {
    res.json({ massege: error });
  }
});

//Read
router.get("/", async (req, res) => {
  try {
    const hoodie = await Hoodie.find();
    res.json(hoodie);
  } catch (error) {
    res.json({ message: error });
  }
});

router.put("/:hoodieId", async (req, res) => {
  const data = {
    nama: req.body.nama,
    ukuran: req.body.ukuran,
    harga: req.body.harga,
  };

  try {
    const hoodie = await Hoodie.updateOne({ _id: req.params.hoodieId }, data);
    res.json(hoodie);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/:hoodieId", async (req, res) => {
  try {
    const hoodie = await Hoodie.deleteOne({
      _id: req.params.hoodieId,
    });
    res.json(hoodie);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
