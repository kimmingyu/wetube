import mogoose, { Mongoose } from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        requored: "File URL is required"
    },
    title: {
        type: String,
        required: "Title is required"
    },
    description: String,
    view: {
        type: Number,
        default: 0
    },
    comments: [
        {
            type: mongoose.Schema.Type.ObjectId,
            ref: "Comment"
        }
    ]
});

const model = mongoose.model("Video", VideoSchema);
export default model;