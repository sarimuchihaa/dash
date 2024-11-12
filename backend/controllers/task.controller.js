import { Task } from "../models/task.model.js";


// POST
const registerTask = async (req, res) => {
    const { taskName, description, assignedTo, label, status, dueDate, projectId, createdBy } = req.body;


    // Check if all required fields are provided.
    if (!taskName || !assignedTo || !createdBy) {
        return res.status(400).json({
            message: "Required fields are missing: taskName, assignedTo and createdBy."
        });
    }

    try {
        // Create new task.
        const newTask = new Task({
            taskName,
            description,
            assignedTo,
            label,
            status,
            dueDate,
            projectId,
            createdBy
        });







        // Save task.
        await newTask.save();

        // Status task.
        res.status(201).json({
            message: "Task created successfully.",
            task: newTask
        });
    // Error handling.
    } catch (error) {
        console.error("Error creating task:", error);
        res.status(500).json({
            message: "Error creating task",
            error: error.message
        });
    }
};

export { registerTask };


// GET 
export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
            .populate('assignedTo', 'username email') 
            .populate('createdBy', 'username email')  
            .populate('projectId', 'projectName')     

        if (tasks.length === 0) {
            return res.status(404).json({ message: "No tasks found." });
        }

        res.status(200).json({
            message: "Tasks fetched successfully.",
            tasks: tasks
        });
    } catch (error) {
        console.error("Error fetching tasks:", error);
        res.status(500).json({
            message: "Error fetching tasks.",
            error: error.message
        });
    }
};


// GET BY ID
export const getTaskById = async (req, res) => {
    const { taskId } = req.params;

    try {
        const task = await Task.findById(taskId)
            .populate('assignedTo', 'username email')
            .populate('createdBy', 'username email')
            .populate('projectId', 'projectName');

        if (!task) {
            return res.status(404).json({ message: "Task not found." });
        }

        res.status(200).json({
            message: "Task fetched successfully.",
            task: task
        });
    } catch (error) {
        console.error("Error fetching task:", error);
        res.status(500).json({
            message: "Error fetching task.",
            error: error.message
        });
    }
};