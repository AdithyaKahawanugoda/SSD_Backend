const express = require("express");
const router = express.Router();
const { saveMessage, saveHash } = require("../controllers/message-controller");

const { protectedWorkerOrManager } = require("../middlewares/auth-middleware");

router.route("/saveMessage").post(protectedWorkerOrManager, saveMessage);
router.route("/saveHash").post(protectedWorkerOrManager, saveHash);

module.exports = router;
