const express = require('express');


const app = express();

app.get('/', (req, res) => {
    console.log('GET request');
    //end() for stop spiining in browser
    //res.end();
    res.send({name: 'Lana'})
});

app.listen(process.env.port || 3000, () => {
    console.log('Listening to port 3000!');
})