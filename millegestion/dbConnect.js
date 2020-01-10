const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'millegestion';

//callback est un fonction
const dbConnect=function(callback){
    MongoClient.connect(url, function(err, client) {
      if (err){
        return
      }
    console.log("Connected successfully to server");
  
    const db = client.db(dbName)
    callback(db)
    client.close()
    })

  }
  module.exports = dbConnect;