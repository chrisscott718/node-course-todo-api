const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err)
    return console.log('Unable to connect to MongoDB server');

  console.log('Connected to MongoDB server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5a020c53575a5df4d67284d3')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then( (res) => {
    console.log(res);
  });

  // db.close();
});
