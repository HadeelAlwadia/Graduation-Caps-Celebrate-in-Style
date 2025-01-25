/*var jwt = require('jsonwebtoken');
const Users = require('../../db/users');
const privateKey = '2Co0l4SchoOl';

module.exports = async function (req, res) {
    try{
        const { email, password } = req.body;
    
        const targetUser = Users.find((user) => user.email.toLowerCase() == email.toLowerCase());
        if (!targetUser) {
            return res.status(401).send('Invalid Username and/or password');
        }
    
        if (targetUser.password !== password) {
            return res.status(401).send('Invalid Username and/or password');
        }
    
        const { id, role } = targetUser
    
        const token = jwt.sign({ id, role }, privateKey);
    
        res.header('auth_token', token).send({ success: true });
    }
    catch(ex) {
        return res.status(500).send(ex);
    }
}


*/

var jwt = require('jsonwebtoken');
const Users = require('../../db/users');
const privateKey = '2Co0l4SchoOl';
const mongoose = require('mongoose');

module.exports = async function (req, res) {
    try{
        const {  email, password} = req.body;
      console.log(email,password)
    
        const token = jwt.sign({ id, role }, privateKey);
        res.header('auth_token', token).send({ success: true });

    }
    catch(ex) {
        return res.status(500).send(ex);
    }
}