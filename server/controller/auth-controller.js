// Controllers

// In an Express.js appicaton, a "controller" refers to a part of your code that is responsible for 
// handling the application's logic. Controllers are typically used to process incoming requests, 
// interact with models(data sources), and send responses back to clients. 
//  They help organize your application by separating concerns and following the MVC(Mode-view-Controllers) design patterns.


// Home Page Logic
import User from "../models/user-models.js";
import Contact from "../models/contact-model.js";
import bcrypt from "bcryptjs";


// Home page logic 

export const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to Home Page");

    } catch (error) {
        console.error(error);
    }
}

//1. Get Registration Data: Retrieve user data(username, email, password)
//2. Check Email Existence: Check if the email is already registered.
//3. Hash Password: Securely hash the password.
//4. Create User: Create a new user with hashed password.
//5 Save to DB: Save user data to the database.
//6 Respond: Respond with "Registration Successful" or handle errors 


// USER Register logic
export const register = async (req, res) => {
    try {
        // console.log(req.body);
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email: email });
        if (userExist) {
            res.status(400).json({ msg: "email already exists." })
        }
        // hash the password

        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({ username, email, phone, password });
        res.status(200).json({ message: "Registration Successful", token: await userCreated.generateToken(), userId: userCreated._id.toString() });


    } catch (error) {
        console.log(error)
    }
}

// User Login Logic

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email: email });
        console.log(userExist)
        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" })
        }

        const isPasswordValid = await userExist.comparePassword(password);
        if (isPasswordValid) {
            return res.status(200).json({ message: "Login Successful", token: await userExist.generateToken(), userId: userExist._id.toString() })
        }
        else {
            res.status(400).json({ message: "Invalid Email or Password" });
        }
    } catch (error) {
        res.status(500).json("Internal Server error")
    }
}

// to send user data / user logic

export const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({ msg: userData });
    } catch (error) {
        res.status(500).json({ message: "Internal Server error" });

    }

}

// In most cases, converting _id to a string is a good practice because it ensures consistency
// and compatibility across different JWT libraries and systems. It also aligns with the
// expectation that claims in a JWT are repersented as strings.


