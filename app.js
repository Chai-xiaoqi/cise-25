// app.js
const path = require('path'); 
const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const books = require('./routes/api/books');
const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/books', books);
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));

app.use(express.static(path.join(__dirname, "/cise-25-client/public")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname,"cise-25-client","public","index.html"));
    });
