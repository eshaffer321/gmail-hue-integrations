const express = require('express');
var morgan = require('morgan');
const app = express();

app.use(morgan('combined'));

app.listen(8080, () => {
    console.log("server is up and running");
});

app.get('/', function (req, res) {
    res.send('hello, world!')
});