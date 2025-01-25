const Users = require('../../db/users');

module.exports = async function (req, res) {
    try{
        const { id: userId } = req.decoded;
    
        const targetUser = Users.find((user) => user.id == userId);
    
        if(!targetUser) { return res.status(401).send('Invalid User ID'); }
    
        res.send(targetUser);

    }
    catch(ex) {
        return res.status(500).send(ex);
    }
}