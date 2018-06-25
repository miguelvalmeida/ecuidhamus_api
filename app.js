const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const flash = require('express-flash');
const session = require('express-session');

const userRoutes = require('./api/routes/user');
const refValuesRoutes = require('./api/routes/ref_values');
const formsRoutes = require('./api/routes/forms');
const chartsRoutes = require('./api/routes/charts');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({secret : 'sessionsecretmegakey', saveUninitialized: true, resave: true}));
app.set('views', path.join(__dirname, './api/views'));
app.set('view engine', 'pug');
app.use(flash());

//Origins that should have acess to the API (* -> all, later change to website name)
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Origin", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Origin ,X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

//Routes which should handle requests
app.use('/user', userRoutes);
app.use('/ref_values', refValuesRoutes);
app.use('/forms', formsRoutes);
app.use('/charts', chartsRoutes);

//Handling errors
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;