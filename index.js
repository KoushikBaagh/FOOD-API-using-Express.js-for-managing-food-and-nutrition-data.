// Combined code from all JavaScript files

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Define food schema
const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  foodGroup: String,
  description: String,
  nutritionalInformation: {
    type: Map,
    of: String,
  },
  servingSize: String,
  allergens: [String],
  ingredients: [String],
  preparationMethods: [String],
  certifications: [String],
  countryOfOrigin: String,
  brandOrManufacturer: String,
  dietaryRestrictions: [String],
  healthBenefits: [String],
  bestPractices: [String],
});

// Define Food model
const Food = mongoose.model("Food", foodSchema);

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
// Create a new food item
app.post("/api/foods", async (req, res) => {
  try {
    const food = new Food(req.body);
    await food.save();
    res.status(201).json(food);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all food items
app.get("/api/foods", async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific food item by ID
app.get("/api/foods/:id", async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (food == null) {
      return res.status(404).json({ message: "Food not found" });
    }
    res.json(food);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// Update a food item
app.put("/api/foods/:id", async (req, res) => {
  try {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(food);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a food item
app.delete("/api/foods/:id", async (req, res) => {
  try {
    await Food.findByIdAndDelete(req.params.id);
    res.json({ message: "Food deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
