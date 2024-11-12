// IMPORTING
import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { getUsers }     from "../controllers/user.controller.js";
import { getUserById }  from "../controllers/user.controller.js";


// ROUTE
const router = Router();

// User routes.
// POST
router.route("/register").post(registerUser);


// GET
router.route("/").get(getUsers);
router.route("/:id").get(getUserById);


export default router;