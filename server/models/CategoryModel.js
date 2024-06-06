import mongoose from 'mongoose';
const { Schema } = mongoose;

const CategoryModel = new Schema({
    adminID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "admin"
    },
    name: {
        type: String,
        require: true,
    },
    desc: {
        type: String,
    },
    status: {
        type: [String],
        enum: ["Active", "Inactive"],
        default: ["Active"]
    },
    slug: {
        type: String,
        require: true,
    },
    thumbnail: {
        type: String,
        default: ''
    },
    parent: [{
        type: Schema.Types.ObjectId,
        ref: 'categories'
    }],

}, { timestamps: true });

export default mongoose.model("categories", CategoryModel);