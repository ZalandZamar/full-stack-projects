require("dotenv").config();

const express = require("express");
const app = express();
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundMiddleWare = require("./middleware/not-found");
const connectDb = require("./db/connect");
const productsRouter = require("./routes/products");

//middleWare

app.use(express.json());

// routes

app.get("/", (req, res) => {
  res.send('<h1>store API<h1/><a href="api/v1/products">products route</a>');
});

app.use("/api/v1/products", productsRouter);

//product routes

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleWare);

const PORT = process.env.PORT || 3500;

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(PORT, console.log(`server is running on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
