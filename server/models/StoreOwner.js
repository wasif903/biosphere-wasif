import mongoose from 'mongoose';
const { Schema } = mongoose;

const StoreOwner = new Schema({
    username: {
        type: String,
        require: true
    },
    storeName: {
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
    OtpCode: {
        type: Number
    },
    OtpExp: {
        type: Number
    },
    logo: {
        type: String,
        default: "",
    },
    verified: {
        type: Boolean,
        default: false,
    },
    isOtpVerified: {
        type: Boolean,
        default: false,
    },
    isManufacturer: {
        type: Boolean,
        default: true,
    },
    role: {
        type: [String],
        enum: ['StoreOwner'],
        default: ['StoreOwner']
    },
    status: {
        type: [String],
        enum: ['Active', 'Inactive'],
        default: ['Active']
    }
}, { timestamps: true });

export default mongoose.model("StoreOwner", StoreOwner);