//import mongoose config and fakeDb
const mongoose = require('mongoose');
const config = require('../config/dev');
const fakeDb = require('./FakeDb');

//the mongoose connection with values config.DB URI string with parameters as true. 
//make a promise with async and awit, if values true DB has been populated.
mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, async () => {
    console.log('Starting populating DB...');
    await fakeDb.populate();
    await mongoose.connection.close();
    console.log('DB has been populated...');
})
