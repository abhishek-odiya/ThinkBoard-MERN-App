import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import ratelimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// middleware  -> we use this coz this help to access the value of the title and content

app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

// this middleware will parse JSON bodies: req.body
app.use(express.json());

app.use(ratelimiter);

//  Our simple custom middleware
// app.use((req, res, next) => {
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next();
// });


app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(5001, () => {
        console.log("Server is runing at port ", PORT);
    });
});


