const Food = require("./foodModel");

// Create a new food item
exports.createFood = async (req, res) => {
  try {
    const food = new Food(req.body);
    await food.save();
    //food.save();
    res.status(201).json(food);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all food items
exports.getAllFood = async (req, res) => {
  try {
    //const foods = await Food.find();
    const foods = Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a specific food item by ID
exports.getFoodById = async (req, res) => {
  try {
    //const food = await Food.findById(req.params.id);
    const food = Food.findById(req.params.id);
    if (food == null) {
      return res.status(404).json({ message: "Food not found" });
    }
    res.json(food);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Update a food item
exports.updateFood = async (req, res) => {
  try {
    //const food = await Food.findByIdAndUpdate(req.params.id, req.body, {
    const food = Food.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(food);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a food item
exports.deleteFood = async (req, res) => {
  try {
    //await Food.findByIdAndDelete(req.params.id);
    Food.findByIdAndDelete(req.params.id);
    res.json({ message: "Food deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
