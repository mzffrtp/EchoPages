import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

const DB = process.env.DATABASE

const Db = () => {
    mongoose
        .connect(DB)
        .then(() => console.log(" server connected"))
        .catch((err) => console.log("server not connected", err))
}

export default Db

