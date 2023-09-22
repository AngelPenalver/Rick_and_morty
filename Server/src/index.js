const server =  require('./app')
const PORT = 3001;
const { conn } = require('./DB_connection');

server.listen(PORT, () => {
   conn.sync()
   console.log('Server raised in port: ' + PORT);
});
module.exports = server