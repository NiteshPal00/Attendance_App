import express from "express";
import mongoose from "mongoose";
import userRouter from "./routers/users.routers";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
const port = 8010;

app.get("/", (req, res) => {
  res.send("Welcome to server ki duniya!!!");
});

mongoose
  .connect(`mongodb://localhost:27017/Application_App`)
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Port is running on server ${port}`);
});

app.use(userRouter);
