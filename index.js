// index.js

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Import Food model and controller
const Food = require("./foodModel");
const foodController = require("./foodController");

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/foodDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Routes
app.post("/api/foods", foodController.createFood);
app.get("/api/foods", foodController.getAllFood);
app.get("/api/foods/:id", foodController.getFoodById);
app.put("/api/foods/:id", foodController.updateFood);
app.delete("/api/foods/:id", foodController.deleteFood);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
