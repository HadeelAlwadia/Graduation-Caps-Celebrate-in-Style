const mongoose = require('mongoose');
const admins = require('../../db/users');



module.exports.handleGetProducts = async function(req, res) {


 
    try{
        let url=new URL(`http://localhost:5100${req.url}`)

        let id = new URLSearchParams( url.search).get('id');
        const targetAdmin= admins.find(admin => admin.id === id);

        if(!targetAdmin) {
             return res.staus(401).send('Invalid User ID')
             }
        console.log(targetAdmin.products)
        res.send(targetAdmin.products);
    }
    catch(ex) {
        return res.status(500).send(ex);
    }
}


module.exports.handleAddProduct = async function(req, res) {
    try {
         
        let url=new URL(`http://localhost:5100${req.url}`)

        let param = new URLSearchParams( url.search)

        let id=param.get('id')

        const targetAdmin = admins.find(admin => admin.id === id);

if(!targetAdmin){
    res.status(401);}

        console.log(targetAdmin.id)
    
        admins[admins.indexOf(targetAdmin)].products.push(req.body)
        res.send({ saved: true });
      
    }

    catch(ex) {
        return res.status(500).send(ex);
    }
}


module.exports.handleDeleteProduct = async function(req, res) {
    try{

        let url=new URL(`http://localhost:5100${req.url}`)

        let param = new URLSearchParams( url.search)

        let adminId=param.get('id')

        let productId=param.get('productId')

        console.log(productId,adminId)

        const targetAdmin = admins.find(admin => admin.id === adminId);
     console.log(targetAdmin)
        if(!targetAdmin) {
             return res.staus(401).send('Invalid User ID')
             }
       
    console.log(targetAdmin)
 
           const adminIndex= admins.indexOf(targetAdmin)
           const productsAdmin=targetAdmin.products.find(pro=>pro.id===productId)

           const productIndex=admins[adminIndex].products.indexOf(productsAdmin)



         admins[adminIndex].products.splice(productIndex,1)

        res.send({ deleted: true });


    }

    catch(ex) {
        return res.status(500).send(ex);
    }
};