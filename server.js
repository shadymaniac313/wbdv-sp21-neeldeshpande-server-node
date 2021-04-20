const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const mongoose = require('mongoose')
const connectionUrl = "mongodb://neel:neel123%3F@iad2-c0-1.mongo.objectrocket.com:53379,iad2-c0-2.mongo.objectrocket.com:53379,i\n" +
    "ad2-c0-0.mongo.objectrocket.com:53379/whiteboard?replicaSet=041c2f2427bb420da5615a2908937370"
mongoose.connect(connectionUrl, {useNewUrlParser: true})

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require('./controllers/quizzes-controller')(app)
require('./controllers/questions-controller')(app)
require('./controllers/quiz-attempts-controller')(app)

// require('dotenv').config();
app.listen(process.env.PORT || 3001, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
