// IMPORTING
import express from "express";
import cors from "cors"; 
import cookieParser from "cookie-parser";
import userRouter from './routes/user.routes.js';
import projectRouter from './routes/project.routes.js';
import taskRouter from './routes/task.routes.js';
import messageRouter from './routes/message.routes.js'


// MIDDLEWARE
const app = express();
app.use(cors({
    origin: "*",
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());


// ROUTES
app.use("/users", userRouter);
app.use("/projects", projectRouter);
app.use("/tasks", taskRouter);
app.use("/messages", messageRouter)

export { app };