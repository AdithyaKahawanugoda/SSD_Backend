const express = require("express");
const router = express.Router();
const {
  saveMessage,
  saveHash,
  decryptTestEndpoint,
} = require("../controllers/message-controller");

const { protectedWorkerOrManager } = require("../middlewares/auth-middleware");

router.route("/saveMessage").post(protectedWorkerOrManager, saveMessage);
router.route("/saveHash").post(protectedWorkerOrManager, saveHash);
router.route("/decrypt").get(decryptTestEndpoint);

module.exports = router;
