const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const getSingleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ message: `did not find the id ${taskID}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
  }
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
