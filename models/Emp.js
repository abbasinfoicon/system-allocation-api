// models/NewUser.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const empSchema = new Schema({
    name: String,
    email: String,
    phoneNumber: String,
});
  
  
  module.exports =mongoose.model('addemp', empSchema);
  