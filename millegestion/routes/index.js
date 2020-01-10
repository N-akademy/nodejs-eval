var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'millegestion';
const dbConnect = require('../dbConnect');

/* Constantes de router */



const findClients = function(db,callback){
  
  db.collection('clients')
    .find({})
    .toArray(function (err, docs) {
      callback(docs)
    })  
}

/* GET home page. */
router.get('/', function(req, res, next) {
  MongoClient.connect(url, function(err, client) {
    if (err){
      return
    }
  console.log("Connected successfully to server");

  const db = client.db(dbName);
    dbConnect(function(db) {
      findClients(db, function (clients) {
        console.log(clients)
        res.render('index', {title: 'Mille Gestion', posts: clients})
      })
    }) 
  })
})

module.exports = router;