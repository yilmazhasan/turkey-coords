require('dotenv').config();
var cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();
app.use(cors())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())


// Require config
const dbConfig = require('./config.js');

// Get conn_str from env first
const conn_str = process.env.MONGO_CONN_STR || dbConfig.MONGO_CONN_STR;
const PORT = process.env.PORT || dbConfig.PORT;
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(conn_str, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});



// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Turkey-Coords application."});
});

// Require Notes routes
require('./app/routes/city.routes.js')(app);

// listen for requests
app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});

