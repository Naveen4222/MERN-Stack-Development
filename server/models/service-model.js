import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    provider: { type: String, required: true },
    description: { type: String, required: true },
})


const Service = new mongoose.model("Service", ServiceSchema);

export default Service;