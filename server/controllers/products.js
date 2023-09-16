const mongoose = require("mongoose");
const Product = require("../models/products");

class ProductController {
  createProduct(req, res) {
    const product = new Product({
      _id: mongoose.Types.ObjectId(),
      image: req.body.image,
      description: req.body.description,
      name: req.body.name,
      price: req.body.price,
      quantity: req.body.quantity,
      isSale: req.body.isSale,
      sale: req.body.sale,
      typeProduct: req.body.typeProduct,
      sizesClothing: req.body.sizesClothing,
      sizeClothing: req.body.sizesClothing[0],
      sizesShoe: req.body.sizesShoe,
      sizeShoe: req.body.sizesShoe[0],
      colors: req.body.colors,
      color: req.body.colors[0],
      amount: req.body.amount,
    });
    return product
      .save()
      .then((newProduct) => {
        return res.status(201).json({
          success: true,
          message: "New product created successfully",
          Product: newProduct,
        });
      })
      .catch((error) => {
        res.status(500).json({
          success: false,
          message: "Server error. Please try again",
          error: error.message,
        });
      });
  }
  getAllProduct(req, res) {
    Product.find()
      .select(
        "_id image description typeProduct name price isSale sale sizeClothing sizesClothing sizeShoe sizesShoe color colors amount quantity"
      )
      .then((allProduct) => {
        return res.status(200).json({
          Product: allProduct,
        });
      })
      .catch((error) => {
        res.status(500).json({
          success: false,
          error: error.message,
        });
      });
  }
  getSingleProduct(req, res) {
    const id = req.params.productId;
    Product.findById(id)
      .then((singleProduct) => {
        res.status(200).json({
          success: true,
          message: `More on ${singleProduct.name}`,
          Product: singleProduct,
        });
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: "This product does not exist",
          error: err.message,
        });
      });
  }
  getRelatedProduct(req, res) {
    Product.find({ typeProduct: req.params.typeProduct })
      .select(
        "_id image description typeProduct name price isSale sale sizeClothing sizesClothing sizeShoe sizesShoe color colors amount quantity"
      )
      .limit(5)
      .then((_products) => {
        return res.status(200).json({
          Product: _products,
        });
      })
      .catch((error) => {
        res.status(500).json({
          success: false,
          error: error.message,
        });
      });
  }
  updateProduct(req, res) {
    const id = req.params.productId;
    const product = req.body;
    Product.updateOne({ _id: id }, { $set: product })
      .then(() =>
        res.status(200).json({
          success: true,
        })
      )
      .catch((err) =>
        res.status(500).json({
          success: false,
        })
      );
  }
  deleteProduct(req, res) {
    const id = req.params.productId;
    Product.deleteOne({ _id: id })
      .then(() =>
        res.status(204).json({
          success: true,
        })
      )
      .catch((err) =>
        res.status(500).json({
          success: false,
        })
      );
  }
}
module.exports = new ProductController();
