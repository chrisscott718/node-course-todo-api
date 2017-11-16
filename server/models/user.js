const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const _ = require('lodash')

let UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
    unique: true,
    validate: {
      validator: (value) => {
         return validator.isEmail(value);
      },
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

// overriding an instance method on the user model
UserSchema.methods.toJSON = function() {
  let user = this;
  // responsible for taking mongoose model and turning it
  // into an object where only the properties available
  // on the document exist.
  let userObject = user.toObject();
  return _.pick(userObject, ['_id', 'email']);
};

// custom instance method to create a token
UserSchema.methods.generateAuthToken = function() {
  let user = this;
  let access = 'auth'; // why do we need this? To specify what access we are giving the user?
  let token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();

  user.tokens.push({access, token});

  return user.save().then(() => {
    return token;
  });
};

// model methods uses statics
UserSchema.statics.findByToken = function(token) {
  let User = this;
  let decoded;

  try {
    decoded = jwt.verify(token, 'abc123');
  } catch(e) {
    return Promise.reject();
    // this will reject the call to findByToken and cause the catch block to run
  }
  return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
  });
};

let User = mongoose.model('User', UserSchema);

module.exports = { User };
