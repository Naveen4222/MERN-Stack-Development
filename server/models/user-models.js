    import bcrypt from "bcryptjs";
    import mongoose from "mongoose";
    import jwt from "jsonwebtoken";

    const userSchema = new mongoose.Schema({

        username: { type: String, required: true },
        phone: { type: Number, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        isAdmin: { type: Boolean, default: false }
    },
        {
            timestamps: true
        })


    // Secure the password with the bcrypt
    userSchema.pre("save", async function (next) {
        // console.log("pre method",this);
        const user = this;
        if (!user.isModified("password")) {
            next();
        }
        try {
            const saltRound = await bcrypt.genSalt(10);
            const hash_password = await bcrypt.hash(user.password, saltRound);
            user.password = hash_password;
        }
        catch (error) {
            next(error)
        }

    })
    // Compare password

    userSchema.methods.comparePassword = async function(password){
        return bcrypt.compare(password, this.password)
    }
    //JSON web token
    userSchema.methods.generateToken = async function() {
        try {
            return jwt.sign({
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin,
            },
                process.env.JWT_SECRET_KEY,
                {
                    expiresIn: "30d",
                }
            )
        } catch (error) {
            console.log(error);
        }
    };

    // Tokens, such as JWTs(JSON Web Token), are typically not stored in the database along with other user
    //  details. Instead, they are issued by the server during the authentication process and then stored on the
    // cliend-side(e.g. in cookies or local storage ) for later use.


    // Define the collection name

    const User = new mongoose.model("User", userSchema);
    export default User;


    // What is JWT
    // JSON Web Tokens (JWT) is an open starndard (RFC 7519) that defines a compant and self-contained why
    // for securely trasmitting information between parties as a JSON object.
    // JWTs are often used for authentication and authorization in web application
    // ** Authentication :  ** Verifying the identity of a user or client.
    // ** Authorization : ** Determining what actions a user or client is allowed to perform

    // ** Components of a JWT: **
    // - Header: Contains metadata about the token, such as the type of token and the signing algorithm
    // - Payload: Contains claims or statements about an entity (typically. the user) and additional data.
    // Common claims include user ID, username, and expiration time.
    // - Signature: To verfiy that the sender of teh JWT is who it says it is and to ensure that the
    // mesage wasn't changed along the way, a signature is included.
