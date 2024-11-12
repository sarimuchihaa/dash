import { Project } from "../models/project.model.js";


// POST
const registerProject = async (req, res) => {
    const { projectName, description, status, startDate, endDate } = req.body;


    // Check if all required fields are provided.
    if (!projectName) {
        return res.status(400).json({
            message: "Required fields are missing: projectName."
        });
    }

    try {
        // Check if email already exists.
        const existingProject = await Project.findOne({ projectName });
        if (existingProject) {
            return res.status(400).json({ message: "Project with this name already existed."});
        }

        // Create new project.
        const newProject = new Project({
            projectName,
            description,
            status,
            startDate,
            endDate,

        });



        // Save project.
        await newProject.save();

        // Status project.
        res.status(201).json({
            message: "Project created successfully.",
            project: { projectName,description, status, startDate, endDate,  }
        });
    // Error handling.
    } catch (error) {
        console.error("Error creating project:", error);
        res.status(500).json({
            message: "Error creating project",
            error: error.message
        });
    }
};

export { registerProject };


// GET
export const getProjects = async (req, res) => {
    try {
        // Fetch all projects.
        const projects = await Project.find()
            .populate('members', 'username email') 
            .populate('messages', 'content timestamp') 
            .populate('tasks', 'title status');

        if (projects.length === 0) {
            return res.status(404).json({ message: "No projects found." });
        }

        res.status(200).json({
            message: "Projects fetched successfully.",
            projects
        });
    } catch (error) {
        console.error("Error fetching projects:", error);
        res.status(500).json({
            message: "Error fetching projects.",
            error: error.message
        });
    }
};

// GET BY ID
export const getProjectById = async (req, res) => {
    const { projectId } = req.params;

    try {
        const project = await Project.findById(projectId)
            .populate('members', 'username email')
            .populate('messages', 'content timestamp')
            .populate('tasks', 'title status');

        if (!project) {
            return res.status(404).json({ message: "Project not found." });
        }

        res.status(200).json({
            message: "Project fetched successfully.",
            project
        });
    } catch (error) {
        console.error("Error fetching project:", error);
        res.status(500).json({
            message: "Error fetching project.",
            error: error.message
        });
    }
};