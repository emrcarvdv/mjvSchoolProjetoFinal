import { Schema } from "mongoose";
import mongoose from "mongoose";

export interface IUser {
  username: string;
  email: string;
  password: string;
  name: string;
  phone: string;
  bio: string;
}

export const userSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    name: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
    },
    bio: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model<IUser>("User", userSchema);
