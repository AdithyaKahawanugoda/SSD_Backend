const express = require("express");
const router = express.Router();
const {
  getAllFiles,
  getFileById,
  deleteFileById,
  saveFile,
} = require("../controllers/file-controller");

const { protectedManager } = require("../middlewares/auth-middleware");

router.route("/getAllfiles").get(protectedManager, getAllFiles);
router.route("/getFileById/:_id").get(protectedManager, getFileById);
router.route("/deleteFileById/:_id").delete(protectedManager, deleteFileById);
router.route("/saveFile").post(protectedManager, saveFile);

module.exports = router;

module.exports = router;
