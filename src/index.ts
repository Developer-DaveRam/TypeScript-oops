import express from "express";
import { db } from "./config/db";

const app = express();
app.use(express.json());



app.get("/", (req, res) => {
  res.send("Welcome to TypeScript Backend with OOP 💙");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
