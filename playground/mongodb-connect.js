const {MongoClient, ObjectID} = require('mongodb')

// this is the database we are connecting to.
// if it does not exist MongoDB will create it.
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err)
    return console.log('Unable to connect to MongoDB server');

  console.log('Connected to MongoDB server');

  // like the database, if the collection does not exist
  // mongodb will create it for us.
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, res) => {
  //   if(err) {
  //     return console.log('Unable to insert todo.', err);
  //   }
  //
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Chris',
  //   age: 27,
  //   location: 'Reno, NV'
  // }, (err, res) => {
  //   if(err) {
  //     return console.log('Unable to insert user into DB', err);
  //   }
  //
  //   console.log(JSON.stringify(res.ops, undefined, 2));
  // });

  db.close();
});
