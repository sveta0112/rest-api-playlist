const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//connect to mongoDB
mongoose.connect('mongodb://localhost/ninjago', { useNewUrlParser: true }); //ninjago(name of db)
mongoose.Promise = global.Promise;

app.use(express.static('public'))

//middleware
app.use(bodyParser.json());

//using middleware to initilaize routes
app.use('/api',routes);

//error handling middleware
app.use(function(err, req, res, next) {
    res.status(422).send({error: err.message})
})

app.listen(process.env.port || 3000, () => {
    console.log('Listening to port 3000!');
})