const express = require('express');
const server = express();

server.get('/', function (req, res) {
    return res.send('oi pessoaldsdfgdfgfdsf')
})

server.listen(5000, function() {
    console.log('server is running');
});