const user = require('../models/user');
const jwt  = require('jsonwebtoken');
const Joi = require('joi');

const userSchema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
  });

exports.register = async (req, res) => {

    const { name, email } = req.body;
    const userData = {
       name,email
      };
      
    // Validate the data against the schema
    const { error, value } = userSchema.validate(userData);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    
    const newItem = new user({name, email});
    const savedItem = await newItem.save();

    // Generate a JWT token
    const token = jwt.sign({ user: savedItem }, 'authentication-token', {
      expiresIn: '1h', // Token expiration time (adjust as needed)
    });
  
    res.status(201).json({savedItem,token});
};