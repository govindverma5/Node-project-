const Item = require('../models/item');

// Create a new item
exports.createItem = async (req, res) => {
  try {
    const { name, description } = req.body;
    const newItem = new Item({name, description});
    const savedItem = await newItem.save();
    res.status(201).json(savedItem,newItem);
    // adding a multiple record in db 
    const items = req.body; // Assuming req.body is an array of items
    const insertedItems = await Item.insertMany(items);
    // ended
  } catch (error) {
    res.status(500).json({ error: 'Error creating item' });
  }
};

exports.getItems = async (req, res) => {
    try {
      const items = await Item.find();
      res.status(200).json(items);
    } catch (error) {
      res.status(500).json({ error: 'Error retrieving items' });
    }
  };