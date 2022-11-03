const FileModel = require("../models/file-model");

exports.saveFile = async (req, res) => {
  const { createdTime, updatedTime, allowedRoles, file } = req.body;

  const time = { createdTime: createdTime, updatedTime: updatedTime };

  const senderEmail = req.user.email;

  try {
    // const uploadRes = await cloudinary.uploader.upload(ppEnc, {
    //   upload_preset: "Profile_Pictures",
    // });
    const savedFile = await FileModel.create({
      senderEmail,
      allowedRoles,
      time,
      file,
      // file: {
      //   filePublicId: uploadRes.public_id,
      //   fileSecURL: uploadRes.secure_url,
      // },
    });
    return res.status(201).json({ msg: "File saved successfully" });
  } catch (error) {
    res.status(500).json({
      msg: "Error in saveFile controller-" + error,
    });
  }
};

exports.deleteFileById = async (req, res) => {
  const _id = req.params._id;
  try {
    await FileModel.deleteOne({ _id: _id });
    return res.status(202).json({ msg: "File deleted successfully" });
  } catch (error) {
    return res.status(500).json({
      msg: "Error in deleteFileById controller-" + error,
    });
  }
};

exports.getAllFiles = async (req, res) => {
  try {
    const allFiles = await FileModel.find();
    res.status(200).send({ allFiles: allFiles });
  } catch (error) {
    res.status(500).json({
      msg: "Error in getAllFiles controller-" + error,
    });
  }
};

exports.getFileById = async (req, res) => {
  const id = req.params._id;

  try {
    const file = await FileModel.findById({ _id: id });
    res.status(200).send({ file: file });

    return true;
  } catch (error) {
    res.status(500).json({
      msg: "Error in getFileById controller-" + error,
    });
  }
};
