const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  senderEmail: {
    type: String,
  },
  content: {
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

const Note = mongoose.model("message", NoteSchema);

module.exports = Note;
