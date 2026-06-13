import Service from "../models/service-model.js";


export const services = async(req,res)=>{
    try {
        const response = await Service.find();
        console.log(response);

        if(!response){
            res.status(400).json({msg:"No service found"})
        };

        res.status(200).json(response);
        
    } catch (error) {
        console.log(error);
    }

}