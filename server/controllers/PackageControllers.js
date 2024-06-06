import PackagesModel from "../models/PackagesModel.js";
import StoreOwner from "../models/StoreOwner.js";

// @POST 
// ENDPOINT: /api/plans/create-plan
const HandleCreatePlan = async (req, res) => {
    try {
        const { title, description, price, discountedPrice, role } = req.body;
        const findPlan = await PackagesModel.findOne({
            title
        });
        if (findPlan) {
            return res.status(400).json({ message: "Plan Already Exists" })
        }
        const newPlan = new PackagesModel({
            title,
            description,
            price,
            discountedPrice,
            role
        });
        await newPlan.save();
        res.status(200).json({ message: "Plan Created Successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

// @PATCH
// ENDPOINT: /api/plans/update-plan/:id
const HandleUpdatePlan = async (req, res) => {
    try {

        const { id } = req.params;
        const { title, description, price, discountedPrice, role } = req.body;
        const findPlan = await PackagesModel.findOne({
            title
        });
        if (findPlan) {
            return res.status(400).json({ message: "Plan Already Exists" })
        }
        const updatePlan = await PackagesModel.findByIdAndUpdate(id, {
            title,
            description,
            price,
            discountedPrice,
            role
        });
        res.status(200).json({ message: "Plan Updated Successfully" })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

// @GET
// ENDPOINT: /api/plans/get-plans
const HandleGetPlans = async (req, res) => {
    try {
        const plans = await PackagesModel.find();
        res.status(200).json(plans)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

// @DELETE
// ENDPOINT: /api/plans/delete-plan/:storeID/:id
const HandleDeletePlan = async (req, res) => {
    try {

        const { storeID, id } = req.params;
        const findStore = await StoreOwner.findById(storeID);
        if (!findStore) {
            return res.status(400).json({ message: "Store Not Found" })
        }
        const deletePlan = await PackagesModel.findOneAndDelete({
            _id: id,
            storeID: storeID
        });
        if (!deletePlan) {
            return res.status(400).json({ message: "Plan Not Found" })
        }
        res.status(200).json({ message: "Plan Deleted Successfully" })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}

export {
    HandleCreatePlan,
    HandleUpdatePlan,
    HandleGetPlans,
    HandleDeletePlan
}