const http = require('http')
const url = require('url')
const fs = require("fs") // com este módulo podemos usar a função fs.readFile.

function readFile(res, file) { // função para ler um arquivo e escrevê-lo na response. Quando a leitura do arquivo terminar a função de callback será chamada.
    fs.readFile(file, (err, data) => { // leitura do arquivo de forma assíncrona, garantindo boa performance e reutilização dos recursos do sistema operacional.
        res.end(data) // data é o conteúdo do arquivo.
    })
}

function callback(req, res) {
    res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" })
    const parts = url.parse(req.url) //faz o parser da URL separando o caminha(rota) 
    const path = parts.path

    if (path == '/cep/se') {
        readFile(res, "cep-praca.json"); // Retorna informações da praça da Sé
    } else if (path == '/cep/republica') { // Retorna informações da minha casa
        readFile(res, "cep-republica.json")
    } else {
        res.end("Path não mapeado: " + path)
    }
}

const server = http.createServer(callback) // iniciando o servidor.

server.listen(7070)

console.log("Servidor rodando!")