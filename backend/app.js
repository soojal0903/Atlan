const express = require("express");
const app = express();
const errorMiddleware  = require("./middleware/error")
const path = require("path")

app.use(express.json());

//Route Imports
const product = require("./routes/productRoute");

app.use("/api/v1",product);

//middle ware for error
app.use(errorMiddleware);

module.exports = app