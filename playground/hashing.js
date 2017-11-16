const {SHA256} = require('crypto-js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

var pass = '123abc!';

bcrypt.genSalt(10, (err, salt) => {
  bcrypt.hash(pass, salt, (err, hash) => {
    console.log(hash)
  });
});

var hpass = '$2a$10$9VL/nmqQayXDTUZlUNYUxeRWx9UHccwxK/TBCnf.E3JBdpIVB1Tf2';

bcrypt.compare(pass, hpass, (err, res) => {
  console.log(res)
});

//
// let data = {
//   id: 10
// };
//
// var token = jwt.sign(data, '123abc');
//
// var decoded = jwt.verify(token, '123abc');
// console.log(decoded)

// var message = 'I am use number 3';
// var hash = SHA256(message).toString();
//
// console.log(`message: ${message}`)
// console.log(`hash: ${hash}`)
//
// // data we'll send back from the server to the client
// var data = {
//   // the id will represent the users id inside of the users collection
//   // this will let us know which users should be able to make the request
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }
//
// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if(resultHash === token.hash) {
//   console.log('data not changed');
// } else {
//   console.log('data was changed')
// }
