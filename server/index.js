import express from "express";

// Other Configs
import cors from "cors";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import fileUpload from "express-fileupload";

// Schemas
import Admin from "./routes/AdminRoutes.js"
import StoreOwner from "./routes/StoreOwnerRoutes.js";
import UserRoutes from "./routes/UserRoutes.js";
import GlobalRoutes from "./routes/GlobalRoutes.js";
import CategoryRoutes from "./routes/CategoryRoutes.js";
import ProductRoutes from "./routes/ProductRoutes.js";
import RatingsRoutes from "./routes/RatingsRoutes.js";
import PackageRoutes from "./routes/PackageRoutes.js";

// DB Connection
import connectMongoDB from "./utils/ConnectDB.js";

const app = express();
dotenv.config();
app.use(express.json());

connectMongoDB()

app.use(cors({
    origin: "*",
    credentials: true,
    methods: ["POST", "GET", "PATCH", "DELETE"]
}))


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_Cloud,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    api_key: process.env.CLOUDINARY_API_KEY
})


app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

// Roles
app.use("/api/admin", Admin);
app.use('/api/store', StoreOwner);
app.use('/api/user', UserRoutes);


// Plans And Packages Routes
app.use("/api/plans", PackageRoutes)

// Category 
app.use("/api/category", CategoryRoutes)

// Products
app.use("/api/products", ProductRoutes)

// API's for all three roles are defined in this route
app.use("/api/global", GlobalRoutes);

//Ratings APis for all Products 
app.use("/ratings", RatingsRoutes);


app.get("/", (req, res) => {
    try {
        res.status(200).json({ message: "Backend Working" })
    } catch (error) {
        res.status(500).json({ message: "BAckend Not Working" })
    }
});

app.listen(process.env.PORT, () => {
    console.log(`APP Listening To ${process.env.PORT}`)
})