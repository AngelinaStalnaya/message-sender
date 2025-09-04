import Message from "../models/Message.js";

class MessageService {
  async create(message) {
    const createdMessage = await Message.create(message);
    return createdMessage;
  }
}

export default new MessageService();
