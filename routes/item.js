const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemcontroller');

// Create a new item
router.post('/items', itemController.createItem);

// Retrieve all items
router.get('/get-items', itemController.getItems);

module.exports = router;