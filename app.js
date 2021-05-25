// app.js

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

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/search-app/build")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname,"search-app","build","index.html"));
    });
} else{
    app.get("/", (req,res) =>{
        res.send("api running");
    });
}
