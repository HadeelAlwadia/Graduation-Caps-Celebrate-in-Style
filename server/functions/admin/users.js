const mongoose = require('mongoose');
const admins = require('../../db/users');

module.exports.handleGetUsers = async function(req, res) {


 
    try{
        let url=new URL(`http://localhost:5100${req.url}`)
        let id = new URLSearchParams( url.search).get('id');
        const targetAdmin= admins.find(admin => admin.id === id);

        if(!targetAdmin) {
             return res.staus(401).send('Invalid User ID')
             }
      
 
    
        res.send(targetAdmin.users);

    }
    catch(ex) {
        return res.status(500).send(ex);
    }
}


module.exports.handleAddUser = async function(req, res) {
    try {
         
        let url=new URL(`http://localhost:5100${req.url}`)

        let param = new URLSearchParams( url.search)

        let id=param.get('id')

        const targetAdmin = admins.find(admin => admin.id === id);

if(!targetAdmin){
    res.status(401);}

        console.log(targetAdmin)
    
        admins[admins.indexOf(targetAdmin)].users.push(req.body)
        res.send({ saved: true });
      
    }

    catch(ex) {
        return res.status(500).send(ex);
    }
}


module.exports.handleDeleteUser = async function(req, res) {
    try{

        let url=new URL(`http://localhost:5100${req.url}`)

        let param = new URLSearchParams( url.search)

        let adminId=param.get('id')

        let userId=param.get('userId')

        console.log(userId,adminId)

        const targetAdmin = admins.find(admin => admin.id === adminId);

        if(!targetAdmin) {
             return res.staus(401).send('Invalid User ID')
             }
       
console.log(targetAdmin)
 
           const adminIndex= admins.indexOf(targetAdmin)
           const usersAdmin=targetAdmin.users.find(user=>user.id===userId)

           const userIndex=admins[adminIndex].users.indexOf(usersAdmin)



         admins[adminIndex].users.splice(userIndex,1)

        res.send({ deleted: true });


    }

    catch(ex) {
        return res.status(500).send(ex);
    }
};