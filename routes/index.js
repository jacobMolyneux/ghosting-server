var express = require("express");
var router = express.Router();
const chatController = require("../Controllers/chatController");

/* GET home page. */
router.get("/", chatController.Homepage);

// Get messages
router.get("/chat", chatController.getMessages);

// CREATE A MESSAGE
router.post("/chat", chatController.sendMessage);

//delete message
router.delete("/chat", chatController.deleteMessage);

module.exports = router;
