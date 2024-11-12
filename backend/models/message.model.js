import mongoose, {Schema} from "mongoose";

const messageSchema = new Schema({
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
    },
    receiverId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
}, {timestamps: true});

export const Message = mongoose.model("Message", messageSchema)