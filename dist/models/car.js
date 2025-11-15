"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CarSchema = new mongoose_1.Schema({
    make: { type: String, required: true, trim: true },
    model: { type: String, required: true, trim: true },
    year: { type: Number, required: true },
    color: { type: String, default: "Unknown" },
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Car", CarSchema);
