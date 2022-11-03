const MessageModel = require("../models/message-model");

exports.saveMessage = async (req, res) => {
  const { content, createdTime, updatedTime, allowedRoles } = req.body;

  const senderEmail = req.user.email;

  const time = { createdTime: createdTime, updatedTime: updatedTime };
  try {
    await MessageModel.create({
      senderEmail,
      content,
      allowedRoles,
      time,
    });
    return res.status(201).json({ msg: "New message saved" });
  } catch (error) {
    return res.status(500).json({
      msg: "Error in createMessage controller-" + error,
    });
  }
};

exports.deleteMessageById = async (req, res) => {
  const _id = req.params._id;
  try {
    await MessageModel.deleteOne({ _id: _id });
    return res.status(202).json({ msg: "Message deleted successfully" });
  } catch (error) {
    return res.status(500).json({
      msg: "Error in deleteMessageById controller-" + error,
    });
  }
};

exports.updateMessageById = async (req, res) => {
  const messageData = req.body;
  try {
    const _id = messageData._id;
    await MessageModel.findOneAndUpdate(
      { _id },
      {
        $set: messageData,
      }
    );
    return res.status(200).json({
      msg: "Message updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      msg: "Error in updateNoteById controller-" + error,
    });
  }
};

exports.getAllMessages = async (req, res) => {
  try {
    const allMessages = await MessageModel.find();
    res.status(200).send({ allMessages: allMessages });
  } catch (error) {
    res.status(500).json({
      msg: "Error in getAllMessages controller-" + error,
    });
  }
};

exports.getMessageById = async (req, res) => {
  const id = req.params._id;

  try {
    const message = await MessageModel.findById({ _id: id });
    res.status(200).send({ message: message });

    return true;
  } catch (error) {
    res.status(500).json({
      msg: "Error in getMessageById controller-" + error,
    });
  }
};
