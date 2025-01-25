var jwt = require('jsonwebtoken');
const privateKey = '2Co0l4SchoOl';
const mongoose = require('mongoose');
const users = require('../../db/usersInfo');
const usersData=require('../../db/users');

module.exports = async function (req, res) {
    try{
        
        const { name, email, password, age, role } = req.body;
        const existUser = users.find(user => user.email.toLowerCase() == email.toLowerCase());
        console.log(users)
        
          if (existUser) {
              return res.status(409).send('Email Already Exist');
          }
      
          users.push(req.body);
          usersData.push({id:req.body.id,users:[],products:[],requests:[]})
          const { id } = req.body;
          const token = jwt.sign({ id, role }, privateKey);
        res.send({ token });
        }
        
    catch(ex) {
        return res.status(500).send(ex);
    }
}