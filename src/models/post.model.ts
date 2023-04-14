import { Schema } from "mongoose";
import mongoose from "mongoose";

export interface IPost {
  userId: string;
  postContent: string;
  likes: string[];
}

export const postSchema = new Schema<IPost>(
  {
    userId: {
      type: String,
    },
    postContent: {
      type: String,
    },
    likes: [{ type: String }],
  },
  { timestamps: true }
);

export const Student = mongoose.model<IPost>("Post", postSchema);
