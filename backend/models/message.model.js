import mongoose, {Schema} from "mongoose";

const messageSchema = new Schema({
    messageId: {
        type: Number
    },
    content: {
        type: String
    },
    timestamp: {
        type: Date,
        default: Date.now
    },

    // User References.
    senderId: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    receiverId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {timestamps: true});

export const Message = mongoose.model("Message", messageSchema)