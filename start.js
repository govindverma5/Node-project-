const express = require('express');
const connectDB = require('./database/connect.js');
const app = express();
const usersRouter = require('./routes/users');
const itemRoutes  = require('./routes/item');
const PORT = 3000;
app.use(express.urlencoded({extended: true}));

//connect with the mongodb
connectDB();

function onStart(){
    console.log(`Server running on port ${PORT}`);
}

app.listen(PORT, onStart);

/**
 * Express middleware.
 */// parses incoming requests with JSON payloads
 app.use(express.json());

// Use the item routes
app.use('/api', itemRoutes);
app.use('/api', usersRouter);

// extended: true - parsing the URL-encoded data with the querystring library


module.exports = app;

