const express = require('express');
const app = express(); // create express app
const bodyParser = require('body-parser'); // parse json 
const cors = require('cors');  // allow cross origin requests
const jwt = require('jsonwebtoken'); // json web token for authentication 
const bcrypt = require('bcryptjs'); // hash password 
require('dotenv').config(); // environment variables 

const port = process.env.PORT || 5001; // port number
app.use(cors()); // allow cross origin requests 
app.use(bodyParser.json()); // parse json 
app.use(bodyParser.urlencoded({ extended: true })); // parse url encoded data 



app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});


app.get("/auth/ping", (req, res) => {
    return res.send('pong');
})

app.listen(port, () => {
    console.log(`auth server has been started on ${port}`);
})
