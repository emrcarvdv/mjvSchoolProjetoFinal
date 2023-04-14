import { Schema } from "mongoose";
import mongoose from "mongoose";

export interface IUser {
  username: string;
  email: string;
  phone: string;
  password: string;
  bio: number;
}

export const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Student = mongoose.model<IUser>("User", userSchema);
