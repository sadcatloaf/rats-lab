import { Schema } from "mongoose";

export const MissionsSchema = new Schema(
    {
        codename: { type: String, required: true },
        objective: { type: String, required: true },
        year: { type: String, required: true },
        locationId: { type: Schema.ObjectId, required: true, ref: 'Location' },
        ratId: { type: Schema.ObjectId, required: true, ref: 'Rat' },
        completed: { type: Boolean, required: true, default: false },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true }
    }

)

MissionsSchema.virtual('rat', {
    localField: 'ratId',
    ref: 'Rat',
    foreignField: '_id',
    justOne: true
})

MissionsSchema.virtual('location', {
    localField: 'locationId',
    ref: 'Location',
    foreignField: '_id',
    justOne: true
})