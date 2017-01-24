const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log("Unable to connect to mongo db server");
  }
  console.log("Connected to mongo db server");

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('58876832f4d2fa8697e1d25c')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  // db.close();
});
