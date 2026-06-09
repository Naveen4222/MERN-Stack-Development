import Contact from "../models/contact-model.js";


export const contactForm = async (req, res) => {
    try {
        const response = req.body   
        await Contact.create(response);
        return res.status(200).json({username:response.username, email:response.email, message:response.message})

        
        // const { username, email, message } = req.body;
        // console.log(req.body);
        // const contactCreated = await Contact.create({ username, email, message });
        // res.status(200).json({ username: username, email: email, message: message });

    }
    catch (error) {
        return res.status(500).json({ message: "Message not delieved" })
    }
}