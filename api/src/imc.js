const express = require('express');
const app = express();
const calcIMC = require('./calculadoraIMC')

app.get('/', (req, res) => {
    let peso = req.query.peso;
    let altura = req.query.altura;
    let imc = calcIMC.calculaIMC(peso, altura);

    res.json({imc: imc});
})

app.listen(8080, () => {
    let data = new Date();
    console.log('Servidor iniciado em: ' + data)
})