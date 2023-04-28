import PostRepository from "../repositories/post.repository";
import { IPost } from "../models/post.model";
import {
  validatePostData,
  validateUpdatePostData,
} from "../middleware/validation.middleware";

class PostsService {
  getAll() {
    return PostRepository.getAll();
  }

  getById(id: string) {
    return PostRepository.getById(id);
  }

  getByAuthor(username: string) {
    return PostRepository.getByAuthor(username);
  }

  async create(post: IPost) {
    const validPost = validatePostData(post);

    if (validPost.error) {
      throw new Error(validPost.error.message);
    }

    return PostRepository.create(post);
  }

  remove(id: string) {
    return PostRepository.remove(id);
  }

  update(id: string, post: Partial<IPost>) {
    const validPost = validateUpdatePostData(post);

    if (validPost.error) {
      throw new Error(validPost.error.message);
    }

    return PostRepository.update(id, post);
  }
}

export default new PostsService();
