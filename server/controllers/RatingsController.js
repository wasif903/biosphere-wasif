import ProductModel from "../models/ProductModel.js";
import RatingsModel from "../models/RatingsModel.js";
import StoreOwner from "../models/StoreOwner.js";
import User from "../models/User.js";


const Post_ratings_and_Reviews = async (req, res) => {
    try {
        const { userID, storeID, ProductId } = req.params;
        const find_user = User.findById(userID);

        const { ratings, Review } = req.body;

        if (!find_user) {
            return res.status(404).json({ message: "User not Found" });
        } else {
            const find_storeID = await StoreOwner.findById(storeID);
            if (!find_storeID) {
                return res.status(404).json({ message: "Store Not Found!" })
            } else {
                const find_product = await ProductModel.findById(ProductId);
                if (!find_product) {
                    return res.status(404).json({ message: "Product Not Found!" })
                } else {
                    const get_ratings = await RatingsModel.findOne({
                        $and: [
                            { userID: userID },
                            { ProductId: ProductId },
                        ]
                    })

                    if (get_ratings) {
                        return res.status(400).json({ message: "You already Posted Ratings and Reviews for this product!" })
                    } else {

                        const create_ratings = new RatingsModel({
                            userID,
                            ProductId,
                            storeID,
                            ratings,
                            Review
                        })
                        await create_ratings.save();
                        return res.status(200).json({ message: "You Posted Ratings Successfully!" })
                    }
                }
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error!" })
    }
};

const get_products_ratings = async (req, res) => {
    try {
        const { ProductId, userID } = req.params;

        const find_user = User.findById({ userID });
        const find_product = ProductModel.findById({ ProductId });

        if (!find_user) {
            return res.status(404).json({ message: "User Not Found!" });
        } else {
            if (!find_product) {
                return res.status(404).json({ message: "Product Not Found!" })
            } else {
                const find_Product_rating = await RatingsModel.find({ ProductId });
                return res.status(200).json({ message: "Ratting of Product", find_Product_rating })
            }
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ messsage: "Internal Server Error!" })
    }
}

const get_Single_products_Average_ratings = async (req, res) => {
    try {
        const { ProductId, userID } = req.params;

        const find_user = await User.findById(userID);
        const find_product = await ProductModel.findById(ProductId);

        if (!find_user) {
            return res.status(404).json({ message: "User Not Found!" });
        }

        if (!find_product) {
            return res.status(404).json({ message: "Product Not Found!" });
        }

        const find_Product_rating = await RatingsModel.find({ ProductId });

        if (find_Product_rating.length === 0) {
            return res.status(200).json({
                message: "No ratings found for this product",
                averageRating: 0
            });
        }

        const Products_average = find_Product_rating.map(item => item.ratings);

        const sum = Products_average.reduce((acc, rating) => acc + rating, 0);
        const averageRating = sum / Products_average.length;

        return res.status(200).json({
            message: "Average Rating of Product",
            averageRating
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error!" });
    }
};


export {
    Post_ratings_and_Reviews,
    get_products_ratings,
    get_Single_products_Average_ratings
} 