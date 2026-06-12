import jwt from "jsonwebtoken";
import User from "../models/user-models.js";

export const authMiddleWare = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        // If you attempt to use an expired token , you'll receive a "401 Unauthorized HTTP response"   
        return res
            .status(401)
            .json({ message: "unauthorized http, token not provided" })
    }

    

    const jwtToken = token.replace('Bearer',"").trim();
    console.log("Token from AuthMiddelWare",  jwtToken);
    try {

        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY)
        const userData = await User.findOne({email:isVerified.email ,}).select({
            password:0,
            createdAt:0,
            updatedAt:0
        })
        console.log(isVerified);
        console.log(userData);
        // custome property
        req.user = userData;
        req.token = token;
        req.userId = userData._id;

        next()
    } catch (error) {
        console.log("JWT token", error);
        
    }



    // Assume token is in the formate "Bearer <jwt token>, Removing  the Bearer prefix"


}