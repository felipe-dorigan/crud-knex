const express = require("express");
const routes = express.Router();

const Product = require("./controllers/Product")

/** Product */
routes
  .get("/product", Product.select)
  .get("/product/:id", Product.get)
  .post("/product", Product.insert)
  .put("/product/:id", Product.update)
  .delete("/product/:id", Product.delete);

module.exports = routes;