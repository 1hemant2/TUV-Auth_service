const express = require('express');
const app = express(); // create express app
const bodyParser = require('body-parser'); // parse json 
const cors = require('cors');  // allow cross origin requests
const port = process.env.PORT || 5001; // port number
const routes = require('./routes'); // routes
app.use(cors()); // allow cross origin requests 
app.use(bodyParser.json()); // parse json 
app.use(bodyParser.urlencoded({ extended: true })); // parse url encoded data 

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use('/api/v1', routes); 


app.get("/ping", (req, res) => {
    return res.send('pong');
})

app.listen(port, () => {
    console.log(`auth server has been started on ${port}`);
})
