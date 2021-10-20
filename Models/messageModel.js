const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  text: { type: String, required: true, minLength: 1, maxLenght: 140 },
  user: { type: String, required: true },
  created_at: { type: Date, default: Date.now(), required: true },
});

module.exports = mongoose.model("Message", MessageSchema);
