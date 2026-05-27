import { Schema, model, type InferSchemaType } from 'mongoose';

const activitySchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    workoutId: { type: Schema.Types.ObjectId, ref: 'Workout', required: true },
    durationMinutes: { type: Number, required: true, min: 1 },
    caloriesBurned: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export type Activity = InferSchemaType<typeof activitySchema>;
export default model<Activity>('Activity', activitySchema);
