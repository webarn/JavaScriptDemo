
const mongoose = require('./db');
Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  date: Date
})

module.exports = mongoose.model('User', UserSchema);