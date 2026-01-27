const Product = require("../Model/ProductModel");


// Get products all 

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};


// GET products by section + link
exports.getProducts = async (req, res) => {
  const { section, link } = req.params;

  const products = await Product.find({ section, link });
  res.json(products);
};

exports.getProductsWithID = async (req, res) => {
  try {
    const { section, link, id } = req.params;

    const product = await Product.findOne({
      _id: id,      // 👈 VERY IMPORTANT
      section,
      link,
    });

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




// ADMIN → ADD in specific section + link
exports.addProduct = async (req, res) => {
  const { section, link } = req.params;

  const product = await Product.create({
    ...req.body,
    section,
    link
  });

  res.json(product);
};

// ADMIN → UPDATE product inside section + link
exports.updateProduct = async (req, res) => {
  const { section, link, id } = req.params;

  const product = await Product.findOneAndUpdate(
    { _id: id, section, link },   // 👈 ensure correct box
    req.body,
    { new: true }
  );

  if (!product) return res.status(404).json({ msg: "Product not found in this section" });

  res.json(product);
};

// ADMIN → DELETE from specific section + link
exports.deleteProduct = async (req, res) => {
  const { section, link, id } = req.params;

  const product = await Product.findOneAndDelete({ _id: id, section, link });

  if (!product) return res.status(404).json({ msg: "Product not found in this section" });

  res.json({ msg: "Deleted from " + section + " / " + link });
};
