
import { Router } from "express"
import {contactForm } from "../controller/contact-controller.js";


const router = Router();
router.post("/contact", contactForm)

const contactRouter = router;
export default contactRouter;