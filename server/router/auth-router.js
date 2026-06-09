// Expree.js,  express.Router() is a mini Express  appication without all the server configuration but with the ability to define routes, middleware, and even have its own set of route handlers. It allows you to modularzie your routes and middleware to keep your code organized and maintainable.

//https://express.js.com/en/guide/routing.html
// Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a "mini -app"


import { Router } from "express";
import { home, register, login } from "../controller/auth-controller.js";
import { validate } from "../middleware/validate-middleware.js";
import signupSchema from "../validator/auth-validator.js";
import { loginSchema } from "../validator/loginSchema.js";
const router = Router();

router.get("/", home);
router.post("/register", validate(signupSchema), register);

router.post("/login", validate(loginSchema),login);

const userRoute = router;

export default userRoute;


// router.get("/",(req,res)=>{
//     res.status(200).send("Router is created");
// });

// app.get("/", (req,res)=>{
//     res.status(200).send("Welcome to MERN learning");
// });

// app.get("/register", (req,res)=>{
//     res.status(200).send("This is the registration page");
// })
