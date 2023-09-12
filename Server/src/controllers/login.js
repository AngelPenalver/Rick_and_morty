const users = require('../utils/users');
const emailVal = users[0].email;
const passwordVal = users[0].password;

function login(req,res){
    const {email, password} = req.query;
    if(emailVal === email && passwordVal === password){
        res.status(200).send({access:true})
    }else res.status(200).send({access:false})
}

module.exports = {login};
