import mongoose from 'mongoose';
const { Schema } = mongoose;

const AdminSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: [String],
        enum: ['Admin'],
        default: ['Admin']
    }
}, { timestamps: true });

export default mongoose.model("admin", AdminSchema);