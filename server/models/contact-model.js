import mongoose from "mongoose";


    //creating schema for contact form
    const contactSchema = new mongoose.Schema({
        username:{type:String, required:true},
        email:{type:String, required:true},
        message:{type:String, required:true}
    })

// creating model or collection for contact

const Contact = new mongoose.model("contact",contactSchema);
export default Contact;
