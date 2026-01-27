const router = require("express").Router();
const auth = require("../MiddelWare/auth");
const admin = require("../MiddelWare/admin");

// USER → get all products


const {
  getAllProducts,
  getProducts,
  getProductsWithID,
  addProduct,
  updateProduct,
  deleteProduct
} = require("../App/Controller/ProductController");

// USER
router.get("/", getAllProducts); 

router.get("/:section/:link/",  getProducts);
router.get("/:section/:link/:id",auth,  getProductsWithID);

// ADMIN
router.post("/:section/:link", auth, admin, addProduct);
router.put("/:section/:link/:id", auth, admin, updateProduct);
router.delete("/:section/:link/:id", auth, admin, deleteProduct);


module.exports = router;
