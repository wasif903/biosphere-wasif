import mongoose from 'mongoose';
const { Schema } = mongoose;

const PackageSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    discountedPrice: {
        type: Number,
    },
    role: {
        type: String,
        require: true
    }
}, { timestamps: true });

export default mongoose.model("plans", PackageSchema);