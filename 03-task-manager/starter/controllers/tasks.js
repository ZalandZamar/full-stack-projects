const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});
const createTasks = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});
const getSingleTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    const error = new Error("not found");
    error.status = 404;
    return next(error);
    return res.status(404).json({ message: `did not find the id ${taskID}` });
  }

  res.status(200).json({ task });
});
const updateTasks = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    res.status(404).json({ mesage: `did not find the id ${taskID}` });
  }

  res.status(200).json({ task });
});
const deleteTasks = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    res.status(404).json({ message: `did not find the id ${taskID}` });
  }

  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  createTasks,
  getSingleTask,
  updateTasks,
  deleteTasks,
};
