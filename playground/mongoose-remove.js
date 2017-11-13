const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

// Todo.remove({}).then((res) => {
//   console.log(res)
// })

// this will find the first one that matches
// remove it
// and send the doc that was removed back.
// Todo.findOneAndRemove({});

// This will also return the doc
// ONLY difference between this and the next is that
// you can query by more than the id.
// Todo.findByIdAndRemove({});

Todo.findByIdAndRemove('5a0a15cc458c0813ee147632')
.then((todo) => {
  console.log("Successfully removed todo:")
  console.log(JSON.stringify(todo, undefined, 2));
})
.catch((err) => {
  console.log("There was an error removing that todo item.");
});
