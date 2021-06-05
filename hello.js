const http = require('http')
const url = require('url')

const callback = ((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" })
    const parts = url.parse(req.url)
    if (parts.path == '/') {
        res.end('Site na raiz')
    } else if (parts.path == '/carros') {
        res.end("Voce está na rota /carros")
    } else if (parts.path == '/teste') {
        res.end("Voce está na rota teste!!!")
    } else {
        res.end("Rota inválida" + parts.path)
    }
})

const server = http.createServer(callback)

server.listen(5050)

console.log('Servidor rodando em http://localhost:5050/');