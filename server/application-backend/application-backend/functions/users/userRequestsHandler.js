const mongoose = require('mongoose');
const Users = require('../../db/users');
const Requests = require('../../db/requests');

module.exports.handleGetRequest = async function(req, res) {
    try{
        const { id: userId } = req.decoded;
        const user = Users.find(user => user.id == userId);
    
        if(!user) { return res.staus(401).send('Invalid User ID'); }
    
        const userRequests = Requests.filter(request => request.user == userId);
    
        res.send(userRequests);
    }
    catch(ex) {
        return res.status(500).send(ex);
    }
}

module.exports.handleAddRequest = async function(req, res) {
    try {
        const { id: userId } = req.decoded;
        const user = Users.find(user => user.id == userId);
    
        if(!user) { return res.staus(401).send('Invalid User ID'); }
    
        const { amount } = req.body;
        if(!amount) { return res.status(400).send('Invalid Input'); }
    
        Requests.push({
            id: new mongoose.Types.ObjectId().toString(),
            amount,
            user: userId,
            status: 'pending'
        });
    
        res.send({ saved: true });
    }
    catch(ex) {
        return res.status(500).send(ex);
    }
}

module.exports.handleDeleteRequest = async function(req, res) {
    try{
        const { id: requestId } = req.params;
        const targetRequestIndex = Requests.findIndex(request => request.id == requestId);
    
        if(targetRequestIndex == -1) { return res.status(401).send('Invalid request ID'); }
    
        Requests.splice(targetRequestIndex, 1);
    
        res.send({ deleted: true });

    }
    catch(ex) {
        return res.status(500).send(ex);
    }
};