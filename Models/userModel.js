const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, minLength: 3, maxLength: 16 },
  password: { type: String, required: true, minLenght: 5, maxLength: 36 },
});

module.exports = mongoose.model("User", UserSchema);
