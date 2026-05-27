import { Schema, model, type InferSchemaType } from 'mongoose';

const workoutSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    intensity: { type: String, enum: ['low', 'moderate', 'high'], default: 'moderate' }
  },
  { timestamps: true }
);

export type Workout = InferSchemaType<typeof workoutSchema>;
export default model<Workout>('Workout', workoutSchema);
