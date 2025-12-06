const getAllTasks = (req, res) => {
  res.send('all tasks!');
}
const createTasks = (req, res) => {
  res.json(req.body);
}
const getSingleTask= (req, res) => {
  res.send('single task!');
}
const updateTasks = (req, res) => {
  res.send('update task!');
}
const deleteTasks = (req, res) => {
  res.send('delete task!');
}

module.exports = {
  getAllTasks,
  createTasks,
  getSingleTask,
  updateTasks,
  deleteTasks
}