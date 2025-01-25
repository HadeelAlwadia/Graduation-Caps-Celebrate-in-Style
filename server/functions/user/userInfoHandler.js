const users = require('../../db/usersInfo');


module.exports.handleUserInfo = async function (req, res) {
    try{
        let url=new URL(`http://localhost:5100${req.url}`)
        let userId = new URLSearchParams( url.search).get('id');
             
        const targetUser = users.find((user) => user.id === userId);
            
        if(!targetUser) { 
            return res.status(401).send('user not found'); }
        console.log(targetUser)
        res.send(targetUser);


    

    }
    catch(ex) {
        return res.status(500).send(ex);
    }
}





module.exports.handleUpdateUserInfo = async function (req, res) {
    try{
        const {avatar}=req.body
        console.log(req.body)
        let url=new URL(`http://localhost:5100${req.url}`)
        let userId = new URLSearchParams( url.search).get('id');
             
        const targetUser = users.find((user) => user.id === userId);

         
        if(!targetUser) { 
            return res.status(401).send('Invalid User ID');
         }
     /*   if(avatar){
        
      const readerFile=new FileReader()
      readerFile.readAsDataURL(avatar)

      readerFile.onload=(e)=>{
      console.log(e.target.result)
        const userIndex =users.indexOf(targetUser)
        users.splice(userIndex,1)
        users.push({...req.body})
       res.send(req.body);
      }
         
        }*/

  

      const userIndex =users.indexOf(targetUser)
      users.splice(userIndex,1)
      users.push({...req.body})
     res.send(req.body);

    

    }
    catch(ex) {
        return res.status(500).send(ex);
    }
}
