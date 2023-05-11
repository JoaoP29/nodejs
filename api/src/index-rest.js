//REST pattern
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({message: 'Hello World!'});
})

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado em: ' + data)
})