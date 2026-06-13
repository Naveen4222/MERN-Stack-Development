import { Router } from "express";
import { services } from "../controller/service-controller.js";


const router = Router();

router.get("/service", services);

const ServiceRoute = router;

export default ServiceRoute;