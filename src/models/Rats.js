import { type } from "express/lib/response";
import { Schema } from "mongoose";

export const RatsSchema = new Schema(
    {
        name: { type: String, required: true },
        callsign: { type: String, required: true },
        picture: { type: String, required: true },
        specialties: { type: [String], required: true },
    },

    {
        timestamps: true,
        toJSON: { virtuals: true }
    }
)
