const { getCharById  } = require('./controllers/getCharById')

const http = require("http");
// console.log(characters)
http.createServer((req, res) => {
    const { url } = req;
    let id = url.split('/').pop();
    id =  Number(id)
    res.setHeader('Access-Control-Allow-Origin', '*');
    if(url.includes("/rickandmorty/character")){
        getCharById(res, id)
    }

}).listen(3001)

// if (url.includes("/rickandmorty/character")) {
//     let id = url.split("/").pop()
//     let found = characters.find((character) => character.id === Number(id))
//     res.writeHead(200, {
//         "content-type": "application/json"
//     }).end(JSON.stringify(found))
// } else {
//     res.writeHead(404);
//     res.end("La ruta no existe");
// }