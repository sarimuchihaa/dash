// IMPORTING
import { Router } from "express";
import { registerMessage } from "../controllers/message.controller.js";
import { getMessages }     from "../controllers/message.controller.js";
import { getMessageById }  from "../controllers/message.controller.js";


// ROUTE
const router = Router();

// Message routes.
// POST
router.route("/register").post(registerMessage);


// GET
router.route("/").get(getMessages);
router.route("/:messageId").get(getMessageById);


export default router;