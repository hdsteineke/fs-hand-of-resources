const express = require('express');

const app = express();

// Built in middleware
app.use(express.json());

// App routes
app.use('/dogs', require('./controllers/dogs'));
app.use('/snacks', require('./controllers/snacks'));
app.use('/hobbies', require('./controllers/hobbies'));
app.use('/flowers', require('./controllers/flowers'));
// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
