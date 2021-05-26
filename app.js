// app.js
const path = require('path'); 
const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');
const port = process.env.PORT || 8082;

// routes
const books = require('./routes/api/books');
const { populate } = require('./models/Book');
const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('test'));

// use Routes
app.use('/api/books', books);

app.use(express.static(path.join(__dirname, '/cise-25-client')));

app.listen(port, () => console.log(`Server running on port ${port}`));

if (process.env.NODE_ENV==='production'){
    app.use(express.static('/cise-25-client/build'));
}

