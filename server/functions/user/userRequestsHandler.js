const mongoose = require('mongoose');
const users = require('../../db/users');
const usersInfo = require('../../db/usersInfo');


module.exports.handleGetRequest = async function(req, res) {


    try{
        let url=new URL(`http://localhost:5100${req.url}`)
        let userId = new URLSearchParams( url.search).get('id');
        const targetUser = users.find(user => user.id === userId);

        if(!targetUser) {
             return res.staus(401).send('Invalid User ID')
             }
      
        res.send(targetUser.requests);

    }
    catch(ex) {
        return res.status(500).send(ex);
    }
}


module.exports.handleAddRequest = async function(req, res) {
    try {
         
        console.log(req.body)
        let url=new URL(`http://localhost:5100${req.url}`)
        let param = new URLSearchParams( url.search)
        let userId=param.get('id')
        const targetUser = users.find(user => user.id === userId);

        if(!targetUser) {
             return res.staus(401).send('Invalid User ID')
             }

             users[users.indexOf(targetUser)].requests.push({...req.body,submittedAt:new Date().toString()})


        res.send({ saved: true });
      
    }

    catch(ex) {
        return res.status(500).send(ex);
    }
}


module.exports.handleDeleteRequest = async function(req, res) {
    try{

        let url=new URL(`http://localhost:5100${req.url}`)
        let param = new URLSearchParams( url.search)
        let userId=param.get('id')
        let requestId=param.get('requestId')

        const targetUser = users.find(user => user.id === userId);
        if(!targetUser) {
             return res.staus(401).send('Invalid User ID')
             }




           const userIndex= users.indexOf(targetUser)

           const targetRequest=targetUser.requests.find(req=>req.requestId===requestId)

           const requestIndex=users[userIndex].requests.indexOf(targetRequest)



           users[userIndex].requests.splice(requestIndex,1)

           console.log(targetRequest)

        res.send({ deleted: true });


    }

    catch(ex) {
        return res.status(500).send(ex);
    }
};