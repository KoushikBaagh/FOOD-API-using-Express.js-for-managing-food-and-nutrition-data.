const express = require("express");
const router = express.Router();
const foodController = require("./foodController");

// Routes
router.post("/foods", foodController.createFood);
router.get("/foods", foodController.getAllFood);
router.get("/foods/:id", foodController.getFoodById);
router.put("/foods/:id", foodController.updateFood);
router.delete("/foods/:id", foodController.deleteFood);

module.exports = router;
