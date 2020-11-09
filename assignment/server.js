const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const controllers = require('./src/controllers/router');

app.use(bodyParser.json());
app.use('/', controllers);

const port = process.env.NODE_PORT || 3000;
app.listen(port, (err) => {
    if(!err) {
        console.log(`Server is running on ${port}`)
    } else {
        console.log('Error:', err);
    }
});