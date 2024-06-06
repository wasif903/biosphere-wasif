import mongoose from 'mongoose';
const { Schema } = mongoose;

const StoreKYCModel = new Schema({
    storeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "StoreOwner"
    },
    acountID: {
        type: String,
        default: ''
    },
    w9form: {
        type: String,
        require: true
    },
    company_registration: {
        type: String,
        require: true
    },
    driving_license: {
        type: String,
        require: true
    },
    desingnation: {
        type: String,
        require: true
    },
    status: {
        type: [String],
        enum: ["Pending", "Rejected", "Accepted"],
        default: ["Pending"]
    }

}, { timestamps: true });

export default mongoose.model("kyc", StoreKYCModel);