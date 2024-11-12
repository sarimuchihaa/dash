import mongoose, {Schema} from "mongoose";

const projectSchema = new Schema({
    projectName: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    status: {
        type: String,
        enum: ['in-review', 'in-progress', 'done', 'to-do'],
        default: 'in-progress',
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    endDate: {
        type: Date,
    },
    // User References.
    members: [{
        type: Schema.Types.ObjectId,
        ref: 'User', 
    }],
    // Messages References.
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message' 
    }],
    // Tasks References.
    tasks: [{
        type: Schema.Types.ObjectId,
        ref: 'Task'
    }],
}, {timestamps:true});

export const Project = mongoose.model("Project", projectSchema)