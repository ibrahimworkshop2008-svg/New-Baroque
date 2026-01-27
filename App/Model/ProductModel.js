const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  price: String,
  section: String,        // CHANTELLE_COLLECTION, ESSENTIAL
  link: String,           // STITCHEDCLOTHE, ENSEMBLES etc
  images: {
    Image1: String,
    Image2: String,
    Image3: String,
    Image4: String,
    Image5: String,
    Image6: String,
    Image7: String,
    Image8: String
  },
  img1: String,
  img2: String
});

module.exports = mongoose.model("Product", productSchema);
