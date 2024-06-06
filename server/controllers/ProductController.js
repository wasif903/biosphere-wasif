import CategoryModel from "../models/CategoryModel.js";
import ProductModel from "../models/ProductModel.js";
import StoreOwner from "../models/StoreOwner.js";
import RatingModel from "../models/RatingsModel.js";
// import ReviewModel from "../models/ReviewModel.js";

import { v2 as cloudinary } from "cloudinary";


const HandleCreateProduct = async (req, res) => {
    try {
        const { storeID } = req.params;

        const {
            title,
            desc,
            slug,
            isVariable,
            price,
            discountPrice,
            stock,
            variations
        } = req.body

        let category = Array.isArray(req.body.category) ? req.body.category : [req.body.category]

        const findStore = await StoreOwner.findById(storeID);
        if (!findStore) {
            return res.status(404).json({ message: "Store Not Found" })
        }

        const productImage = req?.files?.productImage;
        const uploadResult = productImage ? await cloudinary.uploader.upload(productImage.tempFilePath, {
            resource_type: 'image',
            folder: `${findStore.storeName} products`,
        }) : '';

        const galleryImages = req?.files?.galleryImages;

        const imageUrls = [];
        if (Array.isArray(galleryImages)) {
            for (const image of galleryImages) {
                const uploadResult = await cloudinary.uploader.upload(
                    image?.tempFilePath
                );
                imageUrls.push(uploadResult.secure_url);
            }
        } else if (galleryImages) {
            const uploadResult = await cloudinary.uploader.upload(
                galleryImages?.tempFilePath
            );
            imageUrls.push(uploadResult.secure_url);
        }



        const findProduct = await ProductModel.findOne({
            $or: [
                { title },
                { slug }
            ]
        });

        if (findProduct) {
            return res.status(404).json({ message: "Product Already Exists, Title And Slug Should Be Unique" })
        }

        const invalidCategoryIDs = [];
        for (const categoryId of category) {
            const category = await CategoryModel.findOne({ _id: categoryId, storeID: findStore._id.toString() });
            if (!category) {
                invalidCategoryIDs.push(categoryId);
            }
        }

        if (invalidCategoryIDs.length > 0) {
            return res.status(404).json({ message: `Invalid category IDs: ${invalidCategoryIDs.join(', ')}` });
        }

        if (isVariable === false || isVariable === 'false') {
            const createProduct = new ProductModel({
                storeID,
                title,
                desc,
                slug,
                isVariable,
                price,
                discountPrice,
                stock,
                category: Array.isArray(category) ? category : [category],
                productImage: uploadResult.secure_url,
                galleryImages: imageUrls
            })
            await createProduct.save();
            return res.status(200).json({ message: "Product Created Successfully" });
        } else if (isVariable === true || isVariable === 'true') {
            console.log(typeof variations)
            console.log(variations)

            if (typeof variations === "string") {
                const createProduct = new ProductModel({
                    storeID,
                    title,
                    desc,
                    slug,
                    isVariable,
                    category: category,
                    variations: JSON.parse(variations),
                    productImage: uploadResult.secure_url,
                    galleryImages: imageUrls
                })
                console.log("This Block")
                await createProduct.save();
                return res.status(200).json({ message: "Product Created Successfully" });
            } else {
                const createProduct = new ProductModel({
                    storeID,
                    title,
                    desc,
                    slug,
                    isVariable,
                    category: category,
                    variations: variations?.map((item) => JSON.parse(item)),
                    productImage: uploadResult.secure_url,
                    galleryImages: imageUrls
                })
                console.log("This Block 2")
                await createProduct.save();
                return res.status(200).json({ message: "Product Created Successfully" });
            }
        } else {
            res.status(404).json({ message: "Invalid Request" })
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

const HandleUpdateProduct = async (req, res) => {
    try {
        const { storeID } = req.params;
        const {
            title,
            desc,
            slug,
            isVariable,
            price,
            discountPrice,
            stock,
            category = [],
            variations,
            status
        } = req.body;

        // Ensure category is always an array
        const categories = Array.isArray(category) ? category : [category];

        const findStore = await StoreOwner.findById(storeID);
        if (!findStore) {
            return res.status(404).json({ message: "Store Not Found" });
        }

        const findProduct = await ProductModel.findOne({
            slug: slug,
        });
        if (!findProduct) {
            return res.status(404).json({ message: "Product Not Found" });
        }

        const existingSlugProduct = await ProductModel.findOne({
            title,
            slug: { $ne: slug }
        });
        if (existingSlugProduct) {
            return res.status(400).json({ message: "Slug or Title should be unique" });
        }

        const productImage = req?.files?.productImage;
        const uploadResult = productImage ? await cloudinary.uploader.upload(productImage.tempFilePath, {
            resource_type: 'image',
            folder: `${findStore.storeName} products`
        }) : { secure_url: findProduct.productImage };

        const galleryImages = req?.files?.galleryImages;
        const imageUrls = [];
        if (Array.isArray(galleryImages)) {
            for (const image of galleryImages) {
                const uploadResult = await cloudinary.uploader.upload(image.tempFilePath);
                imageUrls.push(uploadResult.secure_url);
            }
        } else if (galleryImages) {
            const uploadResult = await cloudinary.uploader.upload(galleryImages.tempFilePath);
            imageUrls.push(uploadResult.secure_url);
        }

        const invalidCategoryIDs = [];
        for (const categoryId of categories) {
            const category = await CategoryModel.findById(categoryId);
            if (!category) {
                invalidCategoryIDs.push(categoryId);
            }
        }

        if (invalidCategoryIDs.length > 0) {
            return res.status(404).json({ message: `Invalid category IDs: ${invalidCategoryIDs.join(', ')}` });
        }

        findProduct.title = title || findProduct.title;
        findProduct.desc = desc || findProduct.desc;
        findProduct.slug = slug || findProduct.slug;
        findProduct.price = price || findProduct.price;
        findProduct.discountPrice = discountPrice === 'null' ? null : discountPrice || findProduct.discountPrice;
        findProduct.stock = stock || findProduct.stock;
        findProduct.category = categories || findProduct.category;
        findProduct.variations = isVariable === 'true' || isVariable === true ? JSON.parse(variations) : findProduct.variations;
        findProduct.productImage = uploadResult.secure_url || findProduct.productImage;
        findProduct.galleryImages = imageUrls.length > 0 ? imageUrls : findProduct.galleryImages;
        findProduct.status = status || findProduct.status;

        await findProduct.save();
        return res.status(200).json({ message: "Product Updated Successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const HandleGetAllProducts = async (req, res) => {
    try {
        const { storeID } = req.params;

        const { category, keyword } = req.query;

        if (!category && !keyword) {
            const findStore = await StoreOwner.findById(storeID);
            if (!findStore) {
                return res.status(404).json({ message: "Store Not Found" })
            }
            const products = await ProductModel.find({ storeID }).populate({
                path: 'category',
                model: "categories",
                select: ""
            });
            return res.status(200).json({ products: products });
        } else if (category && !keyword) {
            const findStore = await StoreOwner.findById(storeID);
            if (!findStore) {
                return res.status(404).json({ message: "Store Not Found" })
            }
            const products = await ProductModel.find({ storeID, category: { $in: category } }).populate({
                path: 'category',
                model: "categories",
                select: ""
            });
            return res.status(200).json({ products: products });
        } else if (!category && keyword) {
            const findStore = await StoreOwner.findById(storeID);
            if (!findStore) {
                return res.status(404).json({ message: "Store Not Found" })
            }
            const products = await ProductModel.find({ storeID }).populate({
                path: 'category',
                model: "categories",
                select: ""
            });
            const filter = products.filter((item) => item.title.toLowerCase().includes(keyword?.toLowerCase()));
            return res.status(200).json({ products: filter });
        } else if (category && keyword) {
            const findStore = await StoreOwner.findById(storeID);
            if (!findStore) {
                return res.status(404).json({ message: "Store Not Found" })
            }
            const products = await ProductModel.find({ storeID, category: category }).populate({
                path: 'category',
                model: "categories",
                select: ""
            });
            const filter = products.filter((item) => item.title.toLowerCase().includes(keyword?.toLowerCase()));
            return res.status(200).json({ products: filter });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

const HandleGetSingleProduct = async (req, res) => {
    try {

        const { slug } = req.params;
        // const findStore = await StoreOwner.findById(storeID);
        // if (!findStore) {
        //     return res.status(404).json({ message: "Store Not Found" })
        // }
        const findProduct = await ProductModel.findOne({ slug: slug }).populate({
            path: 'category',
            model: "categories",
            select: ""
        }).populate({
            path: 'storeID',
            model: "StoreOwner",
            select: "-password"
        });

        const findRatings = await RatingModel.find({ ProductId: findProduct._id.toString() }).populate({
            path: 'userID',
            model: "user",
            select: "-password"
        });

        const ratings = findRatings.map((item) => Number(item.ratings))
        const sum = ratings.reduce((acc, rating) => acc + rating, 0);
        const averageRating = sum / ratings.length;

        const findRecommendations = await ProductModel.find({
            category: { $in: findProduct.category }
        }).populate({
            path: 'category',
            model: "categories",
            select: "-password"
        }).populate({
            path: 'storeID',
            model: "StoreOwner",
            select: "-password"
        })

        const product = {
            ...findProduct.toObject(),
            ratings: findRatings,
            averageRating,
            reviewCounter: {
                1: findRatings.filter((item) => item.ratings === 1).length,
                2: findRatings.filter((item) => item.ratings === 2).length,
                3: findRatings.filter((item) => item.ratings === 3).length,
                4: findRatings.filter((item) => item.ratings === 4).length,
                5: findRatings.filter((item) => item.ratings === 5).length,
                6: findRatings.filter((item) => item.ratings === 6).length,
            },
            recommendations: findRecommendations.filter((item) => item._id !== findProduct._id)
        }



        res.status(200).json(product);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

const HandleDeleteProduct = async (req, res) => {
    try {

        const {
            storeID,
            prodID,
            slug
        } = req.params;

        const findStore = await StoreOwner.findById(storeID);
        if (!findStore) {
            return res.status(404).json({ message: "Store Not Found" })
        }
        const findProduct = await ProductModel.findOneAndDelete({
            $and: [
                { _id: prodID },
                { slug: slug }
            ]
        });
        if (!findProduct) {
            return res.status(404).json({ message: "Product Not Found" })
        }

        res.status(200).json({ message: "Product deleted successfully" })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

const HandleGetProducyByQuery = async (req, res) => {
    try {
        const { category, type } = req.query;

        let findProductQuery = {};

        if (category) {
            if (Array.isArray(category)) {
                findProductQuery.category = { $in: category };
            } else {
                findProductQuery.category = category;
            }
        }

        if (type === "top-rated") {
            const findProduct = await ProductModel.find(findProductQuery).populate({
                path: 'category',
                model: "categories",
                select: ""
            });

            const mapReview = findProduct.map(async (item) => {
                const findRatings = await RatingModel.find({ ProductId: item._id.toString() }).populate({
                    path: 'userID',
                    model: "user",
                    select: "-password"
                });

                const ratings = findRatings.map((rating) => Number(rating.ratings));
                const sum = ratings.reduce((acc, rating) => acc + rating, 0);
                const averageRating = sum / ratings.length;

                return {
                    ...item.toObject(),
                    ratings: findRatings,
                    averageRating
                };
            });

            const resolved = await Promise.all(mapReview);

            const highRatedProducts = resolved.filter(product => product.averageRating >= 4);

            return res.status(200).json({ products: highRatedProducts });
        } else {
            return res.status(400).json({ message: "Invalid type or category not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}


export {
    HandleCreateProduct,
    HandleUpdateProduct,
    HandleGetAllProducts,
    HandleGetSingleProduct,
    HandleDeleteProduct,
    HandleGetProducyByQuery
}

