const http = require('http')
const url = require('url')
const fs = require("fs")

function readFile(res, file) { // função para ler um arquivo e escrevê-lo na response.
    fs.readFile(file, (err, data) => { // leitura do arquivo de forma assíncrona.
        res.end(data)
    })
}

function callback(req, res) {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" })
    const parts = url.parse(req.url) //faz o parser da URL separando o caminha(rota) 
    const path = parts.path

    if (path == '/cep/sé') {
        readFile(res, "cep-praca.json");
    } else if (path == '/cep/casa') {
        readFile(res, "cep-casa.json")
    }
}