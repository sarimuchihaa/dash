import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    position: {
        type: String,
        default: 'project manager'
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    avatar: {
        type: String, // Cloudinary url
    },
    isOnline: {
        type: Boolean,
        default: false
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    // Project References.
    projects: [{
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }],
    // Messages References.
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }],
}, {timestamps: true});

export const User = mongoose.model("User", userSchema);