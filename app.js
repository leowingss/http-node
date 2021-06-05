const http = require('http') // requerindo módulo http para levantar servidor.

// http.createServer((req, res) => {
//     res.writeHead(200, { //método especifico do obj de resposta.
//         "Content-Type": "text/plain" // especificando o que vai enviar na tela.
//     })

//     res.end("Testando servidor Node") //corpo do conteudo para enviar na tela.
//     console.log("------------")
//     console.log("SERVIDOR RODANDO!")
//     console.log("------------")

// }).listen(4040, "localhost")

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" })

    switch (req.url) {
        case "/":
            res.end("Você está na página home!")
            break;
        case "/contato":
            res.end("Você está na página contato!")
            break;
        default:
            res.end("NADA POR AQUI :)")
    }
}).listen(3030, "localhost")