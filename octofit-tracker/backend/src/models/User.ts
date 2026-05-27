import { Schema, model, type InferSchemaType } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    teamId: { type: Schema.Types.ObjectId, ref: 'Team' }
  },
  { timestamps: true }
);

export type User = InferSchemaType<typeof userSchema>;
export default model<User>('User', userSchema);
