import AdminModel from "../models/AdminModel.js";
import StoreOwner from "../models/StoreOwner.js";
import { v2 as cloudinary } from "cloudinary";
import User from "../models/User.js";
import autoMailer from "../utils/AutoMailer.js";
import StoreKYCModel from "../models/StoreKYCModel.js"
import CategoryModel from "../models/CategoryModel.js";

// @POST 
// ENDPOINT: /api/store/signup-store
const HandleSignupStore = async (req, res) => {
    try {

        const {
            username,
            storeName,
            email,
            password,
            isManufacturer,
        } = req.body;

        const existingStore = await StoreOwner.findOne({
            $or: [
                { username },
                { email },
                { storeName }
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
        })


        const logo = req?.files?.logo;

        const uploadResult = logo ? await cloudinary.uploader.upload(logo.tempFilePath, {
            resource_type: 'image',
            folder: "stores-logo",
        }) : '';

        if (existingStore && existingStore.username === username) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        if (existingStore && existingStore.email === email) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        if (existingStore && existingStore.storeName === storeName) {
            return res.status(400).json({ message: 'Store name already exists' });
        }

        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

        const getOtpCode = otpCode;
        const getOtpExpire = Date.now() + 600000;
        console.log(getOtpCode)
        const restrictedDomains = ['@gmail.com', '@outlook.com', '@yahoo.com'];
        const isEmailRestricted = restrictedDomains.some(domain => email.includes(domain));

        const newStore = new StoreOwner({
            username,
            storeName,
            email,
            password,
            logo: uploadResult.secure_url,
            isManufacturer,
            OtpCode: getOtpCode,
            OtpExp: getOtpExpire
        })

        if (newStore.isManufacturer === true && isEmailRestricted) {
            return res.status(400).json({ message: 'Email domain is not allowed' });
        }

        autoMailer(
            {
                from: 'wasifmehmood903@gmail.com',
                to: newStore.email,
                subject: 'OTP VERIFICATION CODE',
                message: `<h3>Your OTP Verification Code Is: </h3>
                <h3> ${newStore.OtpCode}</h4>`
            }
        );

        await newStore.save();

        const toValidate = {
            username: newStore.username,
            storeName: newStore.storeName,
            email: newStore.email,
        }

        res.status(201).json({ message: 'Store created successfully', toValidate })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

// @PATCH 
// ENDPOINT: /api/store/update-store/:id
const HandleUpdateStore = async (req, res) => {
    try {

        const { id } = req.params;

        const {
            username,
            storeName,
            email,
            isManufacturer,
            status,
            verified
        } = req.body;

        const logo = req?.files?.logo;

        const findStore = await StoreOwner.findById(id);
        if (!findStore) {
            return res.status(404).json({ message: 'Store Not Found' })
        }

        const existingStore = await StoreOwner.findOne({
            $or: [
                { username },
                { email },
                { storeName }
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
        })

        if (existingStore && existingStore.username === username) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        if (existingStore && existingStore.email === email) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        if (existingStore && existingStore.storeName === storeName) {
            return res.status(400).json({ message: 'Store name already exists' });
        }

        const uploadResult = logo ? await cloudinary.uploader.upload(logo.tempFilePath, {
            resource_type: 'image',
            folder: "stores-logo",
        }) : findStore.logo;

        const restrictedDomains = ['@gmail.com', '@outlook.com', '@yahoo.com'];
        const isEmailRestricted = restrictedDomains.some(domain => findStore.email.includes(domain) || email.includes(domain));

        if (isManufacturer === true && isEmailRestricted) {
            return res.status(400).json({ message: 'Email domain is not allowed' });
        }

        // if (findStore.OtpCode === OtpCode && findStore.OtpExp >= Date.now()) {

        //     return res.status(200).json({ message: 'OTP verified successfully' });
        // } else {
        //     // Invalid OTP
        //     return res.status(400).json({ message: 'Invalid OTP or OTP expired' });
        // }

        findStore.username = username || findStore.username
        findStore.storeName = storeName || findStore.storeName
        findStore.email = email || findStore.email
        findStore.isManufacturer = isManufacturer || findStore.isManufacturer
        findStore.logo = uploadResult.secure_url || findStore.logo
        findStore.status = status || findStore.status
        findStore.verified = verified || findStore.verified

        await findStore.save();

        const findKyc = await StoreKYCModel.findOne({ storeID: findStore._id.toString() })

        const token = {
            _id: findStore._id.toString(),
            username: findStore.username,
            storeName: findStore.storeName,
            email: findStore.email,
            isManufacturer: findStore.isManufacturer,
            role: findStore.role,
            logo: findStore.logo,
            verified: findStore.verified,
            accountID: findKyc.acountID || '',
            isOtpVerified: findStore.isOtpVerified
        }

        res.status(200).json({ message: 'Store updated successfully', token })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

// @PATCH 
// ENDPOINT: /api/store/otp-verify-store
const HandleOTPVerifyStore = async (req, res) => {
    try {

        const {
            username,
            storeName,
            email,
            OtpCode,
        } = req.body;

        const findStore = await StoreOwner.findOne({
            $and: [
                { username },
                { email },
                { storeName }
            ]
        })

        if (!findStore) {
            return res.status(404).json({ message: "Invalid Request" })
        }

        if (!OtpCode) {
            return res.status(400).json({ message: "OTP is required for verification" })
        }

        if (findStore.OtpCode === OtpCode && findStore.OtpExp >= Date.now()) {
            const findKyc = await StoreKYCModel.findOne({
                storeID: findStore._id.toString(),
            })
            findStore.isOtpVerified = true
            await findStore.save();
            const token = {
                _id: findStore._id.toString(),
                username: findStore.username,
                storeName: findStore.storeName,
                email: findStore.email,
                isManufacturer: findStore.isManufacturer,
                role: findStore.role,
                logo: findStore.logo,
                verified: findStore.verified,
                accountID: '',
                isOtpVerified: findStore.isOtpVerified,
            }
            return res.status(200).json({ message: 'OTP verified successfully', token });
        } else {
            return res.status(400).json({ message: 'Invalid OTP or OTP expired' });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

// @POST
// ENDPOINT: /api/store/verify-kyc/:id
const HandleKYCStore = async (req, res) => {
    try {

        const { id } = req.params;

        const findStore = await StoreOwner.findById(id);
        if (!findStore) {
            return res.status(404).json({ message: "Store Not Found" })
        }

        const w9form = req?.files?.w9form;
        const company_registration = req?.files?.company_registration;
        const driving_license = req?.files?.driving_license;

        const uploadw9From = w9form ? await cloudinary.uploader.upload(w9form.tempFilePath, {
            resource_type: 'auto',
            folder: `${findStore.storeName}-kyc`,
        }) : '';

        const UploadCompanyRegistration = company_registration ? await cloudinary.uploader.upload(company_registration.tempFilePath, {
            resource_type: 'auto',
            folder: `${findStore.storeName}-kyc`,
        }) : '';

        const UploadDrivingLicense = driving_license ? await cloudinary.uploader.upload(driving_license.tempFilePath, {
            resource_type: 'auto',
            folder: `${findStore.storeName}-kyc`,
        }) : '';

        const validateKyc = await StoreKYCModel.findOne({ storeID: findStore._id.toString() })
        if (!validateKyc) {
            const createKyc = new StoreKYCModel({
                storeID: findStore._id.toString(),
                acountID: "",
                w9form: uploadw9From.secure_url,
                company_registration: UploadCompanyRegistration.secure_url,
                driving_license: UploadDrivingLicense.secure_url,
                desingnation: req.body.desingnation,
                status: ["Pending"]
            })

            await createKyc.save();

            autoMailer(
                {
                    from: 'wasifmehmood903@gmail.com',
                    to: findStore.email,
                    subject: 'KYC Verification Submitted',
                    message: `<h3>Your KYC Has Been Submitted : </h3>
                    <br/>
                    <h3> Store Name : ${findStore.storeName}</h4>
                    <br/>
                    <h3> Username : ${findStore.username}</h4>
                    <br/>
                    <h3> Email : ${findStore.email}</h4>
                    <br/>
                    <h4> Verification process will take up to 7 days. You will receive an email when the process is completed</h4>
                    `
                }
            );

            const token = {
                _id: findStore._id.toString(),
                username: findStore.username,
                storeName: findStore.storeName,
                email: findStore.email,
                isManufacturer: findStore.isManufacturer,
                role: findStore.role,
                logo: findStore.logo,
                verified: findStore.verified,
                isOtpVerified: findStore.isOtpVerified,
                accountID: createKyc?.acountID || '',
                status: createKyc?.status
            }

            return res.status(201).json({ message: 'Verification Is In Process, It will take upto 7 days, please wait', token })
        } else {

            validateKyc.w9form = uploadw9From.secure_url || validateKyc.w9form
            validateKyc.company_registration = UploadCompanyRegistration.secure_url || validateKyc.company_registration
            validateKyc.driving_license = UploadDrivingLicense.secure_url || validateKyc.driving_license
            validateKyc.desingnation = req.body.desingnation || validateKyc.desingnation
            validateKyc.status = ['Pending'] || validateKyc.status

            await validateKyc.save();

            autoMailer(
                {
                    from: 'wasifmehmood903@gmail.com',
                    to: findStore.email,
                    subject: 'KYC Verification Submitted',
                    message: `<h3>Your KYC Has Been Submitted : </h3>
                    <br/>
                    <h3> Store Name : ${findStore.storeName}</h4>
                    <br/>
                    <h3> Username : ${findStore.username}</h4>
                    <br/>
                    <h3> Email : ${findStore.email}</h4>
                    <br/>
                    <h4> Verification resubmission successfully, process will take up to 7 days. You will receive an email when the process is completed</h4>
                    `
                }
            );

            const token = {
                _id: findStore._id.toString(),
                username: findStore.username,
                storeName: findStore.storeName,
                email: findStore.email,
                isManufacturer: findStore.isManufacturer,
                role: findStore.role,
                logo: findStore.logo,
                verified: findStore.verified,
                isOtpVerified: findStore.isOtpVerified,
                accountID: validateKyc?.acountID || '',
                status: validateKyc?.status
            }

            res.status(201).json({ message: 'Verification Re-Submitted Successfully, It will take upto 7 days, please wait', token })
        }




    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

// @PATCH
// ENDPOINT: /api/store/kyc-status/:storeID/:kycID
const HandleKYCStatus = async (req, res) => {
    try {

        const { kycID, storeID } = req.params;
        const { status } = req.body;

        const findStore = await StoreOwner.findById(storeID);
        if (!findStore) {
            return res.status(404).json({ message: 'Store not found' });
        }

        const findKyc = await StoreKYCModel.findById(kycID);
        if (!findKyc) {
            return res.status(404).json({ message: 'KYC not found' });
        }

        if (findKyc.status.includes('Pending')) {
            if (status === 'Rejected') {
                findKyc.status = ['Rejected']
                await findKyc.save();
                const token = {
                    _id: findStore._id.toString(),
                    username: findStore.username,
                    storeName: findStore.storeName,
                    email: findStore.email,
                    isManufacturer: findStore.isManufacturer,
                    role: findStore.role,
                    logo: findStore.logo,
                    verified: findStore.verified,
                    isOtpVerified: findStore.isOtpVerified,
                    accountID: findKyc.acountID,
                    status: findKyc.status
                }
                autoMailer(
                    {
                        from: 'wasifmehmood903@gmail.com',
                        to: findStore.email,
                        subject: 'KYC Verification Submitted',
                        message: `<h3>Your KYC Has Been Submitted : </h3>
                        <br/>
                        <h3> Store Name : ${findStore.storeName}</h4>
                        <br/>
                        <h3> Username : ${findStore.username}</h4>
                        <br/>
                        <h3> Email : ${findStore.email}</h4>
                        <br/>
                        <h4>Verification Process Has Been Rejected, Contact us for more info or Try again</h4>
                        `
                    }
                );
                return res.status(404).json({ message: "Verification Has Been Rejected", token })
            } else if (status === 'Accepted') {

                findKyc.status = ['Accepted']
                await findKyc.save();
                findStore.verified = true;
                await findStore.save();
                const token = {
                    _id: findStore._id.toString(),
                    username: findStore.username,
                    storeName: findStore.storeName,
                    email: findStore.email,
                    isManufacturer: findStore.isManufacturer,
                    role: findStore.role,
                    logo: findStore.logo,
                    verified: findStore.verified,
                    isOtpVerified: findStore.isOtpVerified,
                    accountID: findKyc.acountID,
                    status: findKyc.status
                }
                const category = new CategoryModel({
                    storeID: findStore._id.toString(),
                    name: "uncategorized",
                    slug: "uncategorized",
                    thumbnail: '',
                    parent: []
                });
                await category.save();
                autoMailer(
                    {
                        from: 'wasifmehmood903@gmail.com',
                        to: findStore.email,
                        subject: 'KYC Verification Submitted',
                        message: `<h3>Your KYC Has Been Submitted : </h3>
                        <br/>
                        <h3> Store Name : ${findStore.storeName}</h4>
                        <br/>
                        <h3> Username : ${findStore.username}</h4>
                        <br/>
                        <h3> Email : ${findStore.email}</h4>
                        <br/>
                        <h4>Verification Process Has Been Accepted, You Can Now Sell Your Goods On 
                        <bold> Biospehere Earth </bold></h4>
                        `
                    }
                );
                return res.status(404).json({ message: "Verification Has Been Approved", token })
            } else {
                return res.status(400).json({ message: 'Invalid Request' });
            }
        } else {
            return res.status(400).json({ message: "This Store's Verification Has Already Been Completed" });
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' })
    }
}


// @GET 
// ENDPOINT: /api/store/get-stores
const HandleGetStores = async (req, res) => {
    try {
        const findStores = await StoreOwner.find();
        const mapData = findStores.map(async (item) => {
            const kycData = await StoreKYCModel.findOne({ storeID: item._id.toString() })
            return {
                ...item.toObject(),
                kyc: kycData
            }
        })
        const response = await Promise.all(mapData);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

export {
    HandleSignupStore,
    HandleUpdateStore,
    HandleOTPVerifyStore,
    HandleKYCStore,
    HandleKYCStatus,
    HandleGetStores
}
