const Message = require("../Models/messageModel.js");

exports.Homepage = function (req, res, next) {
  res.json("NOT IMPEMENTED: HOMEPAGE");
};

exports.sendMessage = function (req, res, next) {
  const message = new Message({
    text: req.body.text,
    sender: req.body.sender,
    recipient: req.body.recipient,
    created_at: Date.now(),
  }).save((err) => {
    if (err) {
      return next(err);
    }
    console.log("Message Sent!");
    res.redirect("/");
  });
};

exports.getMessages = function (req, res, next) {
  res.json("NOT IMPLEMENTED: GET MESSAGES FUNCTION");
};

exports.deleteMessage = function (req, res, next) {
  res.json("NOT IMPLEMENTED: DELETE MESSAGE FUNCTION");
};
