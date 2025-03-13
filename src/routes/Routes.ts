import { Router } from "express";
import cors from "cors";
import tuningRoutes from "./tuningRoutes"

const router = Router();

router.use(cors());

router.use("/tuning", tuningRoutes);

export default router;