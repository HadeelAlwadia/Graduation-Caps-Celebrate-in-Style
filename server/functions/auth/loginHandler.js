var jwt = require('jsonwebtoken');
const users = require('../../db/usersInfo');
const privateKey = '2Co0l4SchoOl';

module.exports = async function (req, res) {
    try{
        const { email, password } = req.body;
    
        const targetUser = users.find((user) => user.email.toLowerCase() == email.toLowerCase());


        if (!targetUser) {
            return res.status(401).send('user not found');
        }
        if (targetUser.password !== password) {
            return res.status(401).send('Invalid Username and/or password');
        }
    
        const { id, role ,type} = targetUser
    
        const token = jwt.sign({ id, role }, privateKey);
        res.send({ token,id,type});
    }
    catch(ex) {
        return res.status(500).send(ex);
    }
}