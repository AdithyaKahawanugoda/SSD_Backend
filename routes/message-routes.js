const express = require("express");
const router = express.Router();
const {
  getAllMessages,
  getMessageById,
  updateMessageById,
  deleteMessageById,
  saveMessage,
} = require("../controllers/message-controller");

const { protectedWorkerOrManager } = require("../middlewares/auth-middleware");

router.route("/getAllMessages").get(protectedWorkerOrManager, getAllMessages);
router
  .route("/getMessageById/:_id")
  .get(protectedWorkerOrManager, getMessageById);
router
  .route("/updateMessageById/:_id")
  .patch(protectedWorkerOrManager, updateMessageById);
router
  .route("/deleteMessageById/:_id")
  .delete(protectedWorkerOrManager, deleteMessageById);
router.route("/saveMessage").post(protectedWorkerOrManager, saveMessage); 

module.exports = router;
