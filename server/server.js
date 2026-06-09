import dotenv from "dotenv";
dotenv.config();
import express from "express";
import userRoute from "./router/auth-router.js";
import { connectDb } from "./utils/db.js";
import { errorMiddleware } from "./middleware/error-middleware.js";
import contactRouter from "./router/contact-router.js";
import cors from "cors";


const app = express(); 

const corsOptions = {
        origin:"http://localhost:5173",
        method:"POST, GET, PUT, DELETE PATCH HEAD",
        credentials:true

}
// lets tackel cors
app.use(cors(corsOptions));

const PORT = process.env.PORT;
app.use(express.json());

// app.use(express.json()) : This line of code adds Express middleware that parses incoming request bodies with JSON payloads. It's important to  place this before any routes that need to handle JSON data in the request body. This middleware is responsible for parsing JSON data from requrest, and it should be applied at the beginning of your middleware stack to ensure it's available for all subsequent route handlers.

app.use(userRoute);
app.use(contactRouter);

// app.get("/", (req,res)=>{
//     res.status(200).send("Welcome to MERN learning");
// });

// app.get("/register", (req,res)=>{
//     res.status(200).send("This is the registration page");
// })

app.use(errorMiddleware)


connectDb().then(() => {
        app.listen(PORT, () => {
                console.log(`server is running on port ${PORT} number`);
        })
})