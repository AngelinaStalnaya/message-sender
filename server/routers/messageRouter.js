import Router from "express";
import MessageController from "../controllers/messageController.js";

const messageRouter = new Router();

messageRouter.post("/", MessageController.create);

export default messageRouter;
