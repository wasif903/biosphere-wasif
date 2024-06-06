import mongoose from 'mongoose';
const { Schema } = mongoose;

const ProductModel = new Schema({
    storeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'storeOwner'
    },
    title: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        require: true
    },
    slug: {
        type: String,
        require: true
    },
    isVariable: {
        type: Boolean,
        default: false
    },
    price: {
        type: Number,
        require: true
    },
    discountPrice: {
        type: Number,
    },
    stock: {
        type: Number,
        require: true
    },
    category: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'categories',
        require: true
    },
    variations: [{
        minQty: {
            type: Number,
            require: true
        },
        maxQty: {
            type: Number,
            require: true
        },
        price: {
            type: Number,
            require: true
        }
    }],

    productImage: {
        type: String,
        default: ''
    },
    galleryImages: {
        type: [String],
        default: ['']
    },
    status: {
        type: [String],
        enum: ['Active', 'Draft'],
        default: ['Active']
    }

}, { timestamps: true });

export default mongoose.model("products", ProductModel);



// const variationSchema = new mongoose.Schema({
//   attribute: String,
//   value: String,
//   additionalPrice: Number,
// });

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: String,
//   basePrice: { type: Number, required: true },
//   variations: [variationSchema],
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
// });
