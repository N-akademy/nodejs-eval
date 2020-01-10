var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017'
const dbName = 'millegestion'
const dbConnect = require('../dbConnect');
const ObjectId = require('mongodb').ObjectId;

/*Ajouter un client et l'afficher*/
router.post('/',function(req, res, next) {
    if (err) {
        return
    }
    console.log('Connected successfully to server')

    const db = client.db(dbName)
    dbConnect(function(db){

    db.collection('clients')
        .insertMany([{message:req.body.message},
            {client:{
                firstName:req.params.firstName,
                lastName:req.params.lastName,
                avatar:req.params.avatar,
                phonePro:req.params.phonePro,
                phoneHouse:req.params.phoneHouse,
                email:req.params.email,
            },    
            date:new Date(),
    }])
    console.log(req.params.firstName)
    })
    })



    /* modifie sur editClient*/

    router.get('/:id', function(req, res, next) {

    dbConnect(function(db){
        db.collection('clients')
            .findOne({_id:new ObjectId(req.params.id)},null, function (err,client) {
            if (err){
                return
            }    
            console.log(client) 
            res.render('editClient', {post: client})
            })

    console.log(req.params.id)

    })
    })
    /*  enregistre la modification */
    router.put('/:id', function(req, res, next) {
        
        dbConnect(function(db){
            const client = db.collection('clients')
            db.collection('clients')
                .updateOne({_id:new ObjectId(req.params.id)},{$set:{client:req.body.message}})
            res.end()
        
        })
    })

/*pour supprimer un client*/

router.delete('/:id', function (req, res, next) {
    dbConnect(function (db) {
        db.collection('clients')
            .deleteOne({ _id: new ObjectId(req.params.id) })
        res.end();
    })
})


 



module.exports = router;