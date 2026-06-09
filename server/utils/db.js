import mongoose from "mongoose";
import User from "../models/user-models.js";
import Contact from "../models/contact-model.js";

export const connectDb = async() => {
   try {

      await mongoose.connect(process.env.MONGODB_URL);
      console.log("Connection is successful to database");
   } catch (error) {
      console.log(error);
      process.exit()
   }
}

// createing schema

// const userSchema = new mongoose.Schema({
//    name: { type: String, required: true },
//    age: { type: Number, required: true },
//    email: { type: String, required: true }
// },
//    {
//       timestamps: true
//    })

// creating collection
// const user = mongoose.model("user", userSchema);

// export default user;


// user.create({ name: "Naveen", age: 30, email: "Naveen124@gmail.com" });
// user.insertOne({ name: "Naveen Sharma", age: 23, email: "Naveen1@gmail.com" });





