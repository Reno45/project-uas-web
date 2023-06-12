// definisi module
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParse = require("body-parser");
require("dotenv/config");

app.use(
  bodyParse.urlencoded({
    extended: true,
  })
);
app.use(bodyParse.json());

const celana_cargoRoutes = require("./routes/celana_cargo");
const hoodieRoutes = require("./routes/hoodie");
const authRoutes = require("./routes/auth");
const kemeja = require("./routes/kemeja");

app.use("/celana_cargo", celana_cargoRoutes);
app.use("/hoodie", hoodieRoutes);
app.use("/auth", authRoutes);

// kneksi ke database mongodb
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
// handel error
db.on("error", console.error.bind(console, "koneksi ke mongoDB error"));
// mongodb bener
db.once("open", () => {
  console.log("Terhubung ke Database mongoDB");
});
// listen port
app.listen(process.env.PORT, () => {
  console.log(`server berjalan di port ${process.env.PORT}`);
});
