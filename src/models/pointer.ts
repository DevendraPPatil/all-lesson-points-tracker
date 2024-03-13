import mongoose from "mongoose";

// Define the User schema
const pointerSchema = new mongoose.Schema({
    userId : {
        type: String,
        required: true,
    },
    sessionId: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    points: {
        type: Number,
        required: true,
    },
    milestone: {
        type: String,
         required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
// Create pointer model
const pointer = mongoose.model("Pointer", pointerSchema);
export default pointer;
