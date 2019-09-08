const express = require('express');
const Ninja = require('../models/ninja');
const router = express.Router();


//get a list of ninjas from DB
router.get('/ninjas', function(req, res, next) {
    res.send({type: 'GET'})

   //res.end() --> to stop spiining in browser
});


//add a new ninja to DB
router.post('/ninjas', function(req, res, next) {
    //console.log('req body',req.body) //{ name: 'Baby-Khan', rank: 'black-belt' }
    Ninja.create(req.body).then(ninjaObj => {
        res.send(ninjaObj);
    }).catch(next);
});

//update an existing ninja in DB
router.put('/ninjas/:id', function(req, res, next) {
    res.send({type: 'UPDATE'})


});

//delete an existing ninja from DB
router.delete('/ninjas/:id', function(req, res, next) {
    res.send({type: 'DELETE'})

});


module.exports = router;
