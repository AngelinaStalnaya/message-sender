import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import cors from "cors";
import messageRouter from "./routers/messageRouter.js";

configDotenv();

const app = express();
const PORT = process.env.BACK_PORT || 5500;


app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/api/messages", messageRouter);

const dbUrl = process.env.DB_URL ||  `mongodb://mongo:27017/mydatabase?authSource=admin`;

async function startBackend() {
  try {
    mongoose
      .connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Successfully connected to MongoDB.");
      })
      .catch((err) => {
        console.error("Error connecting to MongoDB:", err);
        process.exit();
      });
    app.listen(PORT, () => console.log("Server is listening ", PORT));
  } catch (err) {
    console.log("Errored with ", err);
  }
}

startBackend();
