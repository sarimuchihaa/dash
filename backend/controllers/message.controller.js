import { Message } from "../models/message.model.js";


// POST
const registerMessage = async (req, res) => {
    const { content, senderId, receiverId } = req.body;


    // Check if all required fields are provided.
    if (!content || !senderId || !receiverId) {
        return res.status(400).json({
            message: "Required fields are missing: content, senderId, and receiverId."
        });
    }

    try {
        // Create new message.
        const newMessage = new Message({
            content,
            senderId,
            receiverId
        });

        // Save message.
        await newMessage.save();

        // Status message.
        res.status(201).json({
            message: "Message created successfully.",
            messageData: newMessage
        });
    // Error handling.
    } catch (error) {
        console.error("Error creating message:", error);
        res.status(500).json({
            message: "Error creating message",
            error: error.message
        });
    }
};

export { registerMessage };


// GET
export const getMessages = async (req, res) => {
    try {
        const messages = await Message.find()
            .populate('senderId', 'username email')  
            .populate('receiverId', 'username email'); 
        
        if (messages.length === 0) {
            return res.status(404).json({ message: "No messages found." });
        }

        res.status(200).json({
            message: "Messages fetched successfully.",
            messages: messages
        });
    } catch (error) {
        console.error("Error fetching messages:", error);
        res.status(500).json({
            message: "Error fetching messages.",
            error: error.message
        });
    }
}


// GET BY ID
export const getMessageById = async (req, res) => {
    const { messageId } = req.params;

    try {
        const message = await Message.findById(messageId)
            .populate('senderId', 'username email') 
            .populate('receiverId', 'username email'); 

        if (!message) {
            return res.status(404).json({ message: "Message not found." });
        }

        res.status(200).json({
            message: "Message fetched successfully.",
            message: message
        });
    } catch (error) {
        console.error("Error fetching message:", error);
        res.status(500).json({
            message: "Error fetching message.",
            error: error.message
        });
    }
};