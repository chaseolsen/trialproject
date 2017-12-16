// nodemon server (runs server and restarts when change is detected)
// webpack --w (watches file changes to compile)
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Brings in mainController to access object that returns data
const controller = require('./controllers/mainController.js');

// Use express for server
var app = express();

// API get requests
app.get('/posts', controller.posts)
app.get('/moreposts', controller.moreposts)

// Display src dir
app.use(express.static(__dirname + './../src'));

// Run server on Port 3000
app.listen(3000, () => console.log('listening on 3000'));
