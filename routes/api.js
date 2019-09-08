const express = require('express');
const router = express.Router();

//get a list of ninjas from DB
router.get('/ninjas', function(req, res) {
    res.send({type: 'GET'})

   //res.end() --> to stop spiining in browser
});


//add a new ninja to DB
router.post('/ninjas', function(req, res) {
    console.log('req body',req.body) //{ name: 'Baby-Khan', rank: 'black-belt' }
    res.send({
        type: 'POST',
        name: req.body.name,
        rank: req.body.rank
    })


});

//update an existing ninja in DB
router.put('/ninjas/:id', function(req, res) {
    res.send({type: 'UPDATE'})


});

//delete an existing ninja from DB
router.delete('/ninjas/:id', function(req, res) {
    res.send({type: 'DELETE'})

});


module.exports = router;
