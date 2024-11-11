import express from "express";
const app = express();

app.get("/", (req, res) => {
    res.send("Hello Sam");
})

app.listen(5000, () => console.log("Server Running on port 5000"));