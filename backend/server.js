// IMPORTING
import express from "express";
import dotenv from "dotenv"; 
import dbConnection from "./db/dbConnection.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;



// Route for root url ("/").
app.get("/", (req, res) => {
    res.send("Hello Sarim 😇");
})



// DB Connection.
app.listen(PORT, () => {
    dbConnection();
    console.log(`Server Running on port ${PORT} 😃`)
});