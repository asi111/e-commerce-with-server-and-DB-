require("dotenv").config();
const express = require("express"),
  axios = require("axios"),
   app = express(),
  PORT = process.env.PORT || 8080,
  path = require("path"),
  publicPatch = path.join(__dirname, "..", "public"),
  {
    insertProducts,
    getProduct,
    updateProductById,
    deleteProductById,
    getContact,
    insertContact,
    insertCarts,
    pushToCart,
    getCart,
    deleteFromCart,
    findProduct,
  } = require("./utils");

app.use(express.static(publicPatch));

app.use(express.json());

// app.post("/products",(req,res)=>{
//     insertProducts(req,res)
// })

app.patch("/carts/delete/:id", (req, res) => {
  deleteFromCart(req, res);
});

app.patch("/carts/update", (req, res) => {
  pushToCart(req, res);
});

app.post("/products", (req, res) => {
  insertProducts(req, res);
});

app.post("/carts", (req, res) => {
  insertCarts(req, res);
});

app.post("/contact", (req, res) => {
  insertContact(req, res);
});

app.get("/products/headphones", (req, res) => {
  getProduct(req, res);
});

app.get("/contact", (req, res) => {
  getContact(req, res);
});

app.get("/cart", (req, res) => {
  getCart(req, res);
});

app.get("/cart/findProduct/:id", (req, res) => {
  findProduct(req, res);
});

app.get("/products/mobile", (req, res) => {
  getProduct(req, res);
});

app.get("/products/Tv", (req, res) => {
  getProduct(req, res);
});

app.get("/products/pc", (req, res) => {
  getProduct(req, res);
});

app.get("/products", (req, res) => {
  getProduct(req, res);
});

app.get("/", (req, res) => {
  getProduct(req, res);
});

// app.patch("/products/:id",(req,res)=>{
//     updateProductById(req,res)
// })

app.patch("/products/update/:id", (req, res) => {
  updateProductById(req, res);
});

app.delete("/product/pc/:id", (req, res) => {
  deleteProductById(req, res);
});

app.listen(PORT, () => {
  console.log(`app listening to ${PORT}`);
});


