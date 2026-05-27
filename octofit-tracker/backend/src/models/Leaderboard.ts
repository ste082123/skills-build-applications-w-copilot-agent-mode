import { Schema, model, type InferSchemaType } from 'mongoose';

const leaderboardSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    points: { type: Number, required: true, min: 0 },
    rank: { type: Number, required: true, min: 1 }
  },
  { timestamps: true }
);

export type Leaderboard = InferSchemaType<typeof leaderboardSchema>;
export default model<Leaderboard>('Leaderboard', leaderboardSchema);
