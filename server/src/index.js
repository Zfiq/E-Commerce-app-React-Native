const express = require("express");
const productRoutes = require("./router/productRoutes");
const orderRoutes = require("./router/orderRoutes");

const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use("/products", productRoutes);
app.use("/orders", orderRoutes);

app.listen(PORT, () => {
  console.log("API is listening on port", PORT);
});
