// IMPORTING
import express from "express";
import cors from "cors"; 
import cookieParser from "cookie-parser";
import userRouter from './routes/user.routes.js'


// MIDDLEWARE
const app = express();
app.use(cors({
    origin: "*",
    credentials: true
}))
app.use(cookieParser())


// ROUTES
app.use("/users", userRouter);

export { app };
