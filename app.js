const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');



//routes

const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');

const app = express();

//use Routes
app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);

//use cors
app.use(cors({
    origin: "*",
    methods: ['GET','POST','PATCH','DELETE','PUT'],
    allowedHeaders: 'Content-Type, Authorization, Origin, X-Requested-with, Accept'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
