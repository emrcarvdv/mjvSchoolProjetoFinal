import { Schema } from "mongoose";
import mongoose from "mongoose";

export interface IPost {
  authorUsername: string;
  title: string;
  body: string;
  tags: string[];
  likes: number;
}

export const postSchema = new Schema<IPost>(
  {
    authorUsername: {
      type: String,
    },
    title: {
      type: String,
    },
    body: {
      type: String,
    },
    likes: [{ type: Number, default: 0 }],
    tags: [{ type: String }],
  },
  { timestamps: true }
);

export const Post = mongoose.model<IPost>("Post", postSchema);
