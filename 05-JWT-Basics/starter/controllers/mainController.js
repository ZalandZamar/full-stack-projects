const jwt = require("jsonwebtoken");
const { BadReqest } = require("../errors");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    throw new BadReqest("username and password are required");
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(200).json({ message: "new user created", token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    message: `hello ${req.user.username}`,
    secret: `here is ur authorized luck number${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
