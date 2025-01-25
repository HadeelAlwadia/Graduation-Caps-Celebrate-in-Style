var jwt = require('jsonwebtoken');
const Users = require('../../db/users');
const privateKey = '2Co0l4SchoOl';
const mongoose = require('mongoose');

module.exports = async function (req, res) {
    try{
        const { name, email, password, age, role } = req.body;
    
        const existUser = Users.find(user => user.email.toLowerCase() == email.toLowerCase());
    
        if (existUser) {
            return res.status(409).send('Email Already Exist');
        }
    
        const user = {
            name,
            email,
            password,
            age,
            role,
            id: new mongoose.Types.ObjectId().toString()
        };
    
        Users.push(user);
    
        const { id } = user;
        const token = jwt.sign({ id, role }, privateKey);
        res.header('auth_token', token).send({ success: true });

    }
    catch(ex) {
        return res.status(500).send(ex);
    }
}