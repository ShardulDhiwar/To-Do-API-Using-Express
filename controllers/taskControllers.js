const todos = require('../Data/data.json');


let tasks = [...todos];

  const getAllTasks = (req, res) => {
    res.status(200).json(tasks)
};

const getTaskById = (req, res) => {
    const { id } = req.params;
    const task = tasks.find(task => task.id == id);
    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task)
};

const createTask = (req, res) => {
    const { title, description, completionStatus } = req.body;

    const newTask = {
        id: Date.now(),
        title,
        description,
        completionStatus: completionStatus || false
    };

    tasks.push(newTask)

    res.status(201).json(newTask)
};

const updateTask = (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    const task = tasks.find(task => task.id == id);
    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    tasks = tasks.map((each) => {
        if (each.id == id) {
            return {
                ...each,
                ...updates,
            }
        }
        return each;
    });

    res.status(200).json({
        message: "Task status Updated",
        updatedTask: tasks.find(t => t.id == id)
    });
};


const deleteTask = (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    const task = tasks.find(task => task.id == id);
    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    }

    tasks = tasks.map((each) => {
        if (each.id == id) {
            return {
                ...each,
                ...updates,
            }
        }
        return each;
    });

    res.status(200).json({
        message: "Task status Updated",
        updatedTask: tasks.find(t => t.id == id)
    });
};

module.exports = {
    getAllTasks,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
};