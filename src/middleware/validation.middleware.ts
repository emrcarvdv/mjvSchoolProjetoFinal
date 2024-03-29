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

export const validateUpdateUserData = (user: Partial<IUser>) => {
  const userSchema = Joi.object().keys({
    name: Joi.string().min(3).max(30),
    phone: Joi.string(),
    bio: Joi.string(),
  });

  return userSchema.validate(user);
};

export const validatePostData = (post: IPost) => {
  const postSchema = Joi.object().keys({
    authorUsername: Joi.string().min(3).max(30).required(),
    title: Joi.string().min(1).max(60).required(),
    body: Joi.string().min(1).max(400).required(),
    tags: Joi.array().items(Joi.string()),
  });

  return postSchema.validate(post);
};

export const validateUpdatePostData = (post: Partial<IPost>) => {
  const postSchema = Joi.object().keys({
    title: Joi.string().min(1).max(60),
    body: Joi.string().min(1).max(400),
    tags: Joi.array().items(Joi.string()),
  });

  return postSchema.validate(post);
};
