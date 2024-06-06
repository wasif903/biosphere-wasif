import AdminSchema from "../models/AdminModel.js"

const HandleGetAllUsers = (req, res) => {
    try {
        res.send("MVC WORKING, Welcome");
    } catch (error) {
        console.log(error);
    }
}


// @POST 
// ENDPOINT: /api/admin/create-admin
const HandleCreateAdmin = async (req, res) => {
    try {
        const { username, email, password, role } = req.body;
        const findAdmin = await AdminSchema.find();
        if (findAdmin.length !== 0) {
            return res.status(400).json({ messsage: "Invalid Signup Request" })
        }
        const newAdmin = new AdminSchema({
            username,
            email,
            password,
            role
        });
        await newAdmin.save();
        const token = {
            username: newAdmin.username,
            email: newAdmin.email,
            password: newAdmin.password,
            role: newAdmin.role,
        }
        res.status(201).json({ message: "Admin Signed Up Successfully", token: token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// @PATCH
// ENDPOINT: /api/admin/update-admin/:id
const HandleUpdateAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email, password } = req.body;
        const findAdmin = await AdminSchema.findById(id);
        if (!findAdmin) {
            return res.status(404).json({ message: "Admin Not Found" });
        }
        findAdmin.username = username || findAdmin.username
        findAdmin.email = email || findAdmin.email
        findAdmin.password = password || findAdmin.password
        await findAdmin.save();
        const token = {
            username: findAdmin.username,
            email: findAdmin.email,
            password: findAdmin.password,
            role: findAdmin.role,
        }
        res.status(200).json({ message: "Admin Updated Successfully", token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

// @GET
// ENDPOINT: /api/admin/get-admin
const HandleGetAdmin = async (req, res) => {
    try {
        const findAdmin = await AdminSchema.find();
        if (findAdmin.length === 0) {
            return res.status(404).json({ message: "Admin Doesn't Exist" });
        }
        res.status(200).json({ admin: findAdmin[0] });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}



export { HandleGetAllUsers, HandleCreateAdmin, HandleUpdateAdmin, HandleGetAdmin };