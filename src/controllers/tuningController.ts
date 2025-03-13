import { Request, Response } from "express";
import Instrument from "../models/Instrument";
import Tuning from "../models/Tuning";

export const getInstruments = async (req: Request, res: Response) => {
    try {
        const instruments = await Instrument.findAll();
        return res.json(instruments);
    } catch (error) {
        return res.status(500).json({ error: "Error fetching instruments" });
    }
}

export const getTuningsByInstrument = async (req: Request, res: Response) => {
    try {
        const { instrument_id } = req.params;
        const tunings = await Tuning.findAll({ where: { instrument_id } });

        if (!tunings.length) {
            return res.status(404).json({ error: "No tunings found for this instrument" });
        }

        return res.json(tunings);
    } catch (error) {
        return res.status(500).json({ error: "Error fetching tunings" });
    }
}

export const getTuning = async (req: Request, res: Response) => {
    try {
        const { tuning_id } = req.params;
        const tuning = await Tuning.findByPk(tuning_id, {
            include: [{ model: Instrument, attributes: ["name"] }],
        });

        if (!tuning) {
            return res.status(404).json({ error: "Tuning not found" });
        }

        return res.json(tuning);
    } catch (error) {
        return res.status(500).json({ error: "Error fetching tuning" });
    }
}
