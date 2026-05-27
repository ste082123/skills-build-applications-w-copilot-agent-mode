"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const workoutSchema = new mongoose_1.Schema({
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    intensity: { type: String, enum: ['low', 'moderate', 'high'], default: 'moderate' }
}, { timestamps: true });
exports.default = (0, mongoose_1.model)('Workout', workoutSchema);
