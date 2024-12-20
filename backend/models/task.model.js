import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
    taskName: {
        type: String,
        required: true, 
    },
    description: {
        type: String
    },
    assignedTo: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true, 
    },
    label: {
        type: String,
        enum: ['development', 'design', 'planning'],
        default: 'development',
    },
    status: {
        type: String,
        enum: ['in-review', 'in-progress', 'done', 'to-do'],
        default: 'in-progress',
    },
    dueDate: {
        type: Date,
    },
    projectId: {
        type: Schema.Types.ObjectId,
        ref: 'Project', 
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User', 
        required: true, 
    }
}, {timestamps: true}); 

export const Task = mongoose.model("Task", taskSchema);