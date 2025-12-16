const customApiError = require("../errors/custom-error");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new customApiError("username and password are required", 400);
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ message: "new user created", token });
};

const dashboard = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new customApiError("no token provided", 401);
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const luckyNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
      message: `hello ${decoded.username}`,
      secret: `here is ur authorized luck number${luckyNumber}`,
    });
  } catch (error) {
    throw new customApiError("not authorized");
  }
};

module.exports = { login, dashboard };
