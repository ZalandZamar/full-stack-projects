const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connection");
require("dotenv").config();
const mongoose = require("mongoose");

// Middleware
app.use(express.json());

app.get("/hello", (req, res) => {
  res.send("Task Manager");
});

app.use("/api/v1/tasks", tasks);

const PORT = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Server running on port ${PORT}`));
    console.log(mongoose.connection.name);
  } catch (error) {
    console.log(error);
  }
};

start();
