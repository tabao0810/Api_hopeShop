const express = require("express");

const {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
  getRelatedProduct,
  getProductByType,
  searchProduct,
} = require("../controllers/products");

const routerProduct = express.Router();

routerProduct.post("/product/create", createProduct);
routerProduct.get("/product/get", getAllProduct);
routerProduct.get("/product/:productId", getSingleProduct);
routerProduct.get("/product/related/:typeProduct", getRelatedProduct);
routerProduct.get("/product/type/:typeProduct", getProductByType);

routerProduct.put("/product/:productId", updateProduct);
routerProduct.delete("/product/:productId", deleteProduct);
routerProduct.get("/product/search/s=:productName", searchProduct);

module.exports = routerProduct;
