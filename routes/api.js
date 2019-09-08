const express = require('express');
const Ninja = require('../models/ninja');
const router = express.Router();


//get a list of ninjas from DB
router.get('/ninjas', function(req, res, next) {
    // Ninja.find({}).then(ninjaList => {
    //     res.send(ninjaList);
    // });
    Ninja.aggregate().near({
        near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
        maxDistance: 100000,
        spherical: true,
        distanceField: "dist.calculated"
    }).then(ninjaList => {
        res.send(ninjaList);
    });
   //res.end() --> to stop spiining in browser
});


//add a new ninja to DB
router.post('/ninjas', function(req, res, next) {
    //console.log('req body',req.body) //{ name: 'Baby-Khan', rank: 'black-belt' }
    Ninja.create(req.body).then(ninjaObj => {
        res.send(ninjaObj);
    }).catch(next); //catch in case of error, will trigger next middleware(which handles error)
});


//update an existing ninja in DB
router.put('/ninjas/:id', function(req, res, next) {
    let id = req.params.id;
    //it gets update record in mongoDb, but it still showa outdated record
    Ninja.findByIdAndUpdate({_id: id}, req.body).then(() => {
        //in order to see update recors , need to use findOne() method
        Ninja.findOne({_id: id}).then(ninjaObj => {
            res.send(ninjaObj);
        });
    });
});

//delete an existing ninja from DB
router.delete('/ninjas/:id', function(req, res, next) {
    //console.log(req.params.id);
    Ninja.findByIdAndRemove({_id: req.params.id}).then(ninjaObj => {
        res.send(ninjaObj);
    });
});


module.exports = router;
