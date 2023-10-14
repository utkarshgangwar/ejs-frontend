require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')


// initialize express
var app = express();
var index = require('./routes/index');

// Database
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('OK'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));


// routes
app.use('/', index);

// Set Port
app.set('port', 3200);

app.listen(app.get('port'), () => {
    console.log('Server started - http://localhost:' + app.get('port'));
});

