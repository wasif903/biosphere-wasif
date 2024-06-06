import AdminModel from "../models/AdminModel.js";
import CategoryModel from "../models/CategoryModel.js";
import StoreOwner from "../models/StoreOwner.js";
import { v2 as cloudinary } from "cloudinary";



// @POST
// ENDPOINT : /api/category/create-category/:storeID
const HandleCreateCategory = async (req, res) => {
    try {
        const { adminID } = req.params;
        const { name, slug, parent, desc, status } = req.body;

        let parentArray = [];
        if (typeof parent === 'string') {
            try {
                parentArray = JSON.parse(parent);
                if (!Array.isArray(parentArray)) {
                    return res.status(400).json({ message: "Invalid Format For Ids" });

                }
            } catch (error) {
                return res.status(400).json({ message: "Invalid JSON format for parent field" });
            }
        } else if (Array.isArray(parent)) {
            parentArray = parent;
        } else {
            return res.status(400).json({ message: "Invalid Format For Ids" });
        }

        const thumbnail = req.files?.thumbnail;

        const validateSlug = slug?.toLowerCase()?.split(' ')?.join('-');

        const findAdmin = await AdminModel.findById(adminID);
        if (!findAdmin) {
            return res.status(404).json({ message: "Invalid Store ID" });
        }


        let uploadResult = { secure_url: '' };
        if (thumbnail) {
            uploadResult = await cloudinary.uploader.upload(thumbnail.tempFilePath, {
                resource_type: 'image',
                folder: `categories`,
            });
        }

        const invalidCategoryIDs = [];
        for (const categoryId of parentArray) {
            const category = await CategoryModel.findById(categoryId);
            if (!category) {
                invalidCategoryIDs.push(categoryId);
            }
        }

        if (invalidCategoryIDs.length > 0) {
            return res.status(404).json({ message: `Invalid category IDs: ${invalidCategoryIDs.join(', ')}` });
        }

        const validateCategory = await CategoryModel.findOne({
            $or: [
                { slug: validateSlug },
                { name: name },
            ]
        });

        if (validateCategory) {
            return res.status(400).json({ message: "Slug and Name should be unique to create a category" });
        }

        const category = new CategoryModel({
            adminID: findAdmin._id.toString(),
            name,
            slug: validateSlug,
            thumbnail: uploadResult.secure_url,
            parent: parentArray,
            desc,
            status
        });

        await category.save();
        res.status(201).json({ message: "Category created successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

// @GET
// ENDPOINT: /api/category/get-populated-categories/:storeID
const HandleGetCategories = async (req, res) => {
    try {


        const categories = await CategoryModel.find({ parent: [] });

        const populateChildren = async (category) => {
            const children = await CategoryModel.find({ parent: category._id });
            if (children.length > 0) {
                category.children = [];
                for (const child of children) {
                    category.children.push(await populateChildren(child.toObject()));
                }
            }
            return category;
        };

        const populatedCategories = [];
        for (const category of categories) {
            populatedCategories.push(await populateChildren(category.toObject()));
        }

        res.status(200).json({ categories: populatedCategories });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// @GET 
// ENDPOINT: /api/category/get-categories/:storeID
const HandleGetAllCategories = async (req, res) => {
    try {
        const categories = await CategoryModel.find().populate({
            path: 'parent',
            model: 'categories',
            select: ''
        });
        res.status(200).json({ categories: categories });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// @GET 
// ENDPOINT: /api/category/get-category/:slug
const HandleGetSingleCategory = async (req, res) => {
    try {
        const { slug } = req.params;

        let category = await CategoryModel.findOne({ slug }).populate({
            path: 'parent',
            model: 'categories',
            select: ''
        });

        if (!category) {
            return res.status(404).json({ message: "Invalid Category ID" });
        }

        const populateCategoriesRecursively = async (category) => {
            if (!category.parent || category.parent.length === 0) {
                return category;
            }

            const populatedParents = await Promise.all(category.parent.map(async (parentId) => {
                const parentCategory = await CategoryModel.findById(parentId).populate({
                    path: 'parent',
                    model: 'categories',
                    select: ''
                });

                if (parentCategory && parentCategory.parent.length > 0) {
                    await populateCategoriesRecursively(parentCategory);
                }

                return parentCategory;
            }));

            category.parent = populatedParents;
            return category;
        };

        category = await populateCategoriesRecursively(category);

        const categoryObject = category.toObject();

        res.status(200).json({ data: categoryObject });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const HandleDeleteCategory = async (req, res) => {
    try {

        const { catID, adminID } = req.params;
        const findAdmin = await AdminModel.findById(adminID);
        if (!findAdmin) {
            return res.status(404).json({ message: "Admin not found" });
        }
        

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export {
    HandleCreateCategory,
    HandleGetCategories,
    HandleGetAllCategories,
    HandleGetSingleCategory
}



