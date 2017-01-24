const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log("Unable to connect to mongo db server");
  }
  console.log("Connected to mongo db server");

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });
  // db.close();
  // db.collection('Users').deleteMany({name: 'Luka'}).then((result) => {
  //   console.log(result);
  // });
  db.collection('Users').findOneAndDelete({_id: new ObjectID('58876b45f4d2fa8697e1d35c')}).then((result) => {
    console.log(result);
  });
  // db.close();
});
