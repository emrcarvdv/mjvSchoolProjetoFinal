import Joi from "joi";
import { IUser } from "../models/user.model";
import { IPost } from "../models/post.model";

export const validateUserData = (user: IUser) => {
  const userSchema = Joi.object().keys({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string().required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
      .required(),
    name: Joi.string().min(3).max(30).required(),
    phone: Joi.string(),
    bio: Joi.string(),
  });

  return userSchema.validate(user);
};

export const validatePostData = (post: IPost) => {
  const postSchema = Joi.object().keys({
    authorUsername: Joi.string().required(),
    title: Joi.string().min(1).max(40).required(),
    body: Joi.string().min(1).max(40).required(),
    tags: Joi.array().items(Joi.string()),
  });

  return postSchema.validate(post);
};
