import MessageService from "../services/messageService.js";

class MessageController {
  async create(req, res) {
    try {
      const message = await MessageService.create(req.body);
      res.status(201).json(message);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}

export default new MessageController();
