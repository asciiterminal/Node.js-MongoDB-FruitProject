//jshint esversion:6

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';


const dbName  = 'fruitsDB';

const client = new MongoClient(url, {useNewUrlParser: true} );

client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected Successfully to the Server");//Connection status checker

const db = client.db(dbName);

insertDocuments(db, function() {

  client.close();
});

});



const insertDocuments = function(db, callback)
{

const collection = db.collection('fruits');
collection.insertMany([

{
  name: "Apple",
  score: 8,
  review: "Great Fruit"
},
{

  name: "Orange",
  score: 6,
  review: "Kinda Sour"

},

{

  name: "Banana",
  score: 9,
  review: "Great Stuff"

}


], function(err, result){
  assert.equal(err, null);
  // assert.equal(3,result.result.n);
   assert.equal(3,result.length);
  console.log("Inserted 3 documents into the collection");
  callback(result);
});

};
