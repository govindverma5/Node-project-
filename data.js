// const data = [
//     {name:'Hello',email: 'test@yopmail.com',phone :'9999'},
//     {name:'sam', email: 'sam@yopmail.com',phone :'34'},
//     {name:'test',email: 'test@yopmail.com',phone :'232'}
// ]
// module.exports = data;

const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Where we will keep books
let books = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    // We will be coding here
    const book = req.body;

    // Output the book to the console for debugging
    console.log(book);
    books.push(book);

    res.send('Book is added to the database');
});

app.get('/get-books', (req, res) => {
    res.json(books);
});

app.get('/book/:isbn', (req, res) => {
    // Reading isbn from the URL
    res.json(books);
    const isbn = req.params.isbn;
    console.log(isbn);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));