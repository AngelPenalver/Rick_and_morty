const characters = require('./utils/data.js');
const http = require("http");
console.log(characters)
http.createServer((req, res) => {
    const { url } = req;
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (url.includes("/rickandmorty/character")) {
        let id = url.split("/").pop()
        let found = characters.find((character) => character.id === Number(id))
        res.writeHead(200, {
            "content-type": "application/json"
        }).end(JSON.stringify(found))
    } else {
        res.writeHead(404);
        res.end("La ruta no existe");
    }
}).listen(3001)
