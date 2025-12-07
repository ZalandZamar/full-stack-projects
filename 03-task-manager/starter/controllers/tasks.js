const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("all tasks!");
};
const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const getSingleTask = (req, res) => {
  res.send("single task!");
};
const updateTasks = (req, res) => {
  res.send("update task!");
};
const deleteTasks = (req, res) => {
  res.send("delete task!");
};

module.exports = {
  getAllTasks,
  createTasks,
  getSingleTask,
  updateTasks,
  deleteTasks,
};
