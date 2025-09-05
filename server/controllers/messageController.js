import MessageService from "../services/messageService.js";

class MessageController {
  async create(req, res) {
    try {
      const message = await MessageService.create(req.body);
      res.status(201).json(message);
    } catch (err) {
      console.log(err)
      res.status(500).json(err.message);
    }
  }

  async get(req, res) {
    try {
      const result = await MessageService.get();
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err.message);
    }
  }
}

export default new MessageController();
