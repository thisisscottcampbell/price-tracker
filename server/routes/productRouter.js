const express = require("express");
const productRouter = express.Router();
const productController = require("../controllers/productControllers");

//Get All Products:
//GET Request
productRouter.get("/products/:user", productController.getProducts, (req, res) => {
  res.status(200).json(res.locals.products);
});

//Add One Product:
//POST Request
productRouter.post("/products/:user", productController.addProduct, (req, res) => {
  res.status(200).json('post complete');
});

//Delete One Product:
//DELETE Request
productRouter.delete(
  "/products/:id",
  productController.deleteProduct,
  (req, res) => {
    res.status(200).json("Delete product");
  }
);

module.exports = productRouter;
