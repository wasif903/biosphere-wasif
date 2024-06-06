import mongoose from 'mongoose';
const { Schema } = mongoose;

const InquiryModel = new Schema({
    storeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "storeOwner",
    },
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
}, { timestamps: true });

export default mongoose.model("Inquiry", InquiryModel);