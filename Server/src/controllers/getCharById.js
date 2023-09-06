const axios = require('axios')

function getCharById(res, id){
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({data})=> {
        const character = {
            id: id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            image: data.image,
            origin: data.origin,
            status: data.status
        }
        res.writeHead(200);
        res.end(JSON.stringify(character))
    }).catch((error) => {
        res.writeHead(400, {
            'content-type':'text/plain',
        })
        res.end(error.message)
    })

}
module.exports = {
    getCharById,
}