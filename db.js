const mongoose = require('mongoose');
require('dotenv').config();

//const mongoURL=process.env.MONGODBURL_LOCAL;
const mongoURL=process.env.MONGODB_URL;

mongoose.connect(mongoURL,{
  /* useNewUrlParser: true,
  useUnifiedTopology: true */

});

const db=mongoose.connection;

db.on('connected',()=>{
  console.log('Connected to MongoDB server');
})

db.on('disconnected',()=>{
  console.log('Disconnected from MongoDB server');
})

db.on('error',(err)=>{
  console.error('Error Occured',err);
})

module.exports = db;