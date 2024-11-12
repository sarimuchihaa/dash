// IMPORTING
import { Router } from "express";
import { registerProject } from "../controllers/project.controller.js";
import { getProjects }     from "../controllers/project.controller.js";
import { getProjectById }  from "../controllers/project.controller.js";


// ROUTE
const router = Router();

// Project routes.
// POST
router.route("/register").post(registerProject);


// GET
router.route("/").get(getProjects);
router.route("/:projectId").get(getProjectById);


export default router;