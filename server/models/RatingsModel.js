import mongoose from 'mongoose';
const { Schema } = mongoose;

const ratingsModel = new Schema({
    storeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "StoreOwner"
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    ProductId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "products"
    },
    ratings: {
        type: Number,
        require: true
    },
    Review: {
        type: String,
    },

}, { timestamps: true });

export default mongoose.model("ratings", ratingsModel);