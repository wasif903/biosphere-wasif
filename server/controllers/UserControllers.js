import AdminModel from "../models/AdminModel.js";
import StoreOwner from "../models/StoreOwner.js";
import User from "../models/User.js";

import { v2 as cloudinary } from "cloudinary";

// @POST
// ENDPOINT /api/user/signup-user 
const HandleSignupUser = async (req, res) => {
    try {

        const {
            username,
            email,
            password,
            cpass
        } = req.body;

        const findUser = await StoreOwner.findOne({
            $or: [
                { username },
                { email },
            ]
        }) || await AdminModel.findOne({
            $or: [
                { username },
                { email }
            ]
        }) || await User.findOne({
            $or: [
                { username },
                { email }
            ]
        });

        const profile_image = req?.files?.profile_image;

        const uploadResult = profile_image ? await cloudinary.uploader.upload(profile_image.tempFilePath, {
            resource_type: 'image',
            folder: "user-profile",
        }) : '';

        if (findUser && findUser.username === username) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        if (findUser && findUser.email === email) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        if (cpass !== password) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        const createUser = new User({
            username,
            email,
            password,
            profile_image: uploadResult.secure_url
        })

        await createUser.save();

        const token = {
            username: createUser.username,
            email: createUser.email,
            role: createUser.role,
            profile_image: createUser.profile_image
        }

        res.status(200).json({ message: "User Created Successfully", token });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// @PATCH
// ENDPOINT /api/user/edit-user 
const HandleEditUser = async (req, res) => {
    try {

        const {
            username,
            email,
            password,
        } = req.body;

        const profile_image = req?.files?.profile_image;

        const findUser = await User.findOne({ email });
        if (!findUser) {
            return res.status(404).json({ message: "User Not Found" })
        }

        const uploadResult = profile_image ? await cloudinary.uploader.upload(profile_image.tempFilePath, {
            resource_type: 'image',
            folder: "user-profile",
        }) : findUser.profile_image;

        findUser.username = username || findUser.username
        findUser.email = email || findUser.email
        findUser.profile_image = uploadResult.secure_url || findUser.profile_image

        await findUser.save();

        const token = {
            username: findUser.username,
            email: findUser.email,
            role: findUser.role,
            profile_image: findUser.profile_image
        }

        res.status(200).json({ message: "User Updated Successfully", token })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


export {
    HandleSignupUser,
    HandleEditUser
}