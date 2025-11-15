import { Schema, model, Document  } from "mongoose";

export interface ICar extends Document {
    make: string;
    model: string;
    year: number;
    color?: string;
}

const CarSchema = new Schema<ICar>({
    make: {type: String, required: true, trim: true},
    model: {type: String, required: true, trim: true},
    year: {type: Number, required: true},
    color: {type: String, default: "Unknown"},
}, {timestamps: true})

export default model<ICar>("Car", CarSchema);