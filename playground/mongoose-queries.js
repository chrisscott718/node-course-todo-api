const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// var id = '5a07644906965209e4bf9b8c';
//
// // method to check mongodb ids
// if(!ObjectID.isValid(id)) {
//   console.log('ID NOT VALID NIGGA');
// }

// Todo.find({
//   // mongoose handles converting the String id into an object id
//   // this is completely valid
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo find one', todo);
// });

Todo.findById(id).then((todo) => {
  if(!todo) {
    return console.log('ID NOT FOUND');
  }
  console.log('Todo by id', todo);
}).catch((e) => console.log(e));


var id = '5a021ed655c2d37bbc7d5745';

User.findById(id).then((user) => {
  if(!user) {
    return console.log('USER NOT FOUND');
  }
  console.log('USER ', user);
}, (e) => console.log(e));
