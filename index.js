const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');

const app = express();


app.use(bodyParser.json());
//initilaize routes
app.use('/api',routes);

app.listen(process.env.port || 3000, () => {
    console.log('Listening to port 3000!');
})