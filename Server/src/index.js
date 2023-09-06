const characters = require('./utils/data.js');
const http = require("http");
console.log(characters)
let id;
http.createServer((req, res) => {
    const { url } = req;
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (url.includes("/rickandmorty/character")) {
        res.writeHead(200, {
            "content-type": "application/json"
        })
        id = url.split("/").pop()
        id = parseInt(id)
        console.log(id)
        return res.end(JSON.stringify(characters[id - 1]))
    }
    res.writeHead(404);
    res.end("La ruta no existe");
}).listen(3001)
