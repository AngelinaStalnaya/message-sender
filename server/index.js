import express from "express";
import mongoose from "mongoose";
import { configDotenv} from 'dotenv';
import cors from 'cors';
import messageRouter from "./routers/messageRouter.js";

configDotenv();

const app = express();
const PORT = 5500;

app.use(cors());
app.use(express.json());
app.use((req, res, next)=> {
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})

app.use('/api/messages', messageRouter)


async function startBackend() {
  try {
    await mongoose.connect(process.env.DB_URL)
    app.listen(PORT, () => console.log('Server is listening ', PORT))
  } catch (err) {
    console.log('Errored with ', err)
  }
}

startBackend();