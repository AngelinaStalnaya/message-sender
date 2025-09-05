import Message from "../models/Message.js";
// import { MessageFormDataSchema } from "../../types/MessageFormData.js";

// const validateData = (data) => {
//   const result = MessageFormDataSchema.safeParse(data);
//   if (result.success) {
//     console.log("Validation successful");
//     return result.data;
//   } else {
//     console.error("Validation failed:", result.error.error);
//   }
// };

class MessageService {
  async create(message) {
    // const messageToDB = validateData(message);
    const createdMessage = await Message.create(message);
    return createdMessage;
  }

  async get() {
    const messages = await Message.find();
    return messages;
  }
}

export default new MessageService();
