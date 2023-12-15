import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors"
import morgan from "morgan";
import DB from "./config/Db.js"

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

//!middlewares
app.use(morgan("dev"))

//! databace
DB();

//!Global error management
app.use((err, req, res, next) => {
    const errStatus = err.status || 500;
    const errMessage = err.message || "Soory, something went wrong!"

    return res.status(errStatus).json({
        statusCode: errStatus,
        message: errMessage
    });
});

app.get("/", (req, res) => {
    res.send(" server is alive, contunie coding !...")
})

const port = process.env.PORT || 4000
app.listen(port, () => [
    console.log(`app listening on ${port} `)
])
