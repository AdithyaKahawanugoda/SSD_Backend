require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth-routes");
const messageRoutes = require("./routes/message-routes");
const fileRoutes = require("./routes/file-routes");

const app = express();

app.use(cors());
app.use(express.json()); // middleware for parsing json objects
app.use(express.urlencoded({ extended: true })); // middleware for parsing URL

const PORT = process.env.PORT;
const URI = process.env.MONGO_URI;

// mongodb connection
mongoose
  .connect(URI, { dbName: "ssd_db" })
  .then(() => {
    console.log("MongoDB Connection Success");
  })
  .catch((err) => {
    console.log("Connection Failed - " + err);
  });

// API endpoints
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/file", fileRoutes);

// used to bind and listen the connections on the specified host and port
app.listen(PORT, () => {
  console.log(`Backend Server is running on port ${PORT}`);
});
