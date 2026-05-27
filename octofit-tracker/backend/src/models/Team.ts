import { Schema, model, type InferSchemaType } from 'mongoose';

const teamSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, default: '' }
  },
  { timestamps: true }
);

export type Team = InferSchemaType<typeof teamSchema>;
export default model<Team>('Team', teamSchema);
