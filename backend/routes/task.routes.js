// IMPORTING
import { Router } from "express";
import { registerTask } from "../controllers/task.controller.js";
import { getTasks }     from "../controllers/task.controller.js";
import { getTaskById }  from "../controllers/task.controller.js";


// ROUTE
const router = Router();

// Task routes.
// POST
router.route("/register").post(registerTask);


// GET
router.route("/").get(getTasks);
router.route("/:taskId").get(getTaskById);


export default router;