const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  // file: {
  //   filePublicId: {
  //     type: String,
  //     required: [
  //       true,
  //       "Error with cloudinary service! Can not find the file URL.",
  //     ],
  //   },
  //   fileSecURL: {
  //     type: String,
  //     required: [
  //       true,
  //       "Error with cloudinary service! Can not find the file URL.",
  //     ],
  //   },
  // },
  file: {
    type: String,
    uppercase: true,
  },
  senderEmail: {
    type: String,
  },
  allowedRoles: [],
  time: {
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
});

const Note = mongoose.model("file", NoteSchema);

module.exports = Note;
