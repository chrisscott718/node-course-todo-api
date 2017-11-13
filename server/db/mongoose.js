const mongoose = require('mongoose');

// defines promise library to use
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp', {useMongoClient: true});

module.exports = { mongoose };
