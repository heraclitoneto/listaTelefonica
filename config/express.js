var express = require('express');
var app = express();


var contatos = [
	{nome: "Heráclito", telefone: "9999-2222", data: new Date(), operadora: {nome: "Oi", codigo: 14}},
	{nome: "jhow", telefone: "9999-3333", data: new Date(), operadora: {nome: "Vivo", codigo: 15}},
	{nome: "Mariana", telefone: "9999-9999", data: new Date(), operadora: {nome: "Tim", codigo: 41}}
];
var operadoras = [
	{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
	{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
	{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
	{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
];

app.get('/contatos', function (req, res) {
	res.json(contatos);

});

app.get('/operadoras', function (req, res) {
	res.json(operadoras);

});



module.exports = app;