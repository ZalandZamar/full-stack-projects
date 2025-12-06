const express = require('express');
const router = express.Router();
const {getAllTasks, createTasks, getSingleTask, updateTasks, deleteTasks} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTasks);
router.route('/:id').get(getSingleTask).patch(updateTasks).delete(deleteTasks);

module.exports = router