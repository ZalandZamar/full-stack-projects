const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connection");
require("dotenv").config();
const mongoose = require("mongoose");
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// Middleware
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;

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
