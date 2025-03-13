import { Router } from "express";
import * as TuningController from "../controllers/tuningController";

const router = Router();

router.get("/instruments", TuningController.getInstruments);
router.get("/tunings/:instrument_id", TuningController.getTuningsByInstrument);
router.get("/tuning/:tuning_id", TuningController.getTuning);

export default router;