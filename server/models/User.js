import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
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
    profile_image: {
        type: String,
        default: ''
    },
    role: {
        type: [String],
        enum: ['User'],
        default: ['User']
    }
}, { timestamps: true });

export default mongoose.model("user", UserSchema);