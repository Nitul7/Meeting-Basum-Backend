import mongoose from "mongoose";
import { boolean, number, object } from "zod";

const meetingSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    visibility: { type: String, enum: ["public", "private", "codeprotected"] },
    startTime: { type: Date },
    endTime: { type: Date },
    scheduledStartTime: { type: Date },
    duration : { type: String, enum: ["30min", "1hr", "2hr"] },
    code : { type: Number },
    transcript: { type: Object },
}, { timestamps: true });

export default meetingSchema;