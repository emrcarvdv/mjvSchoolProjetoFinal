import PostRepository from "../repositories/post.repository";
import { IPost } from "../models/post.model";

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
    return PostRepository.create(post);
  }

  remove(id: string) {
    return PostRepository.remove(id);
  }

  update(id: string, post: Partial<IPost>) {
    return PostRepository.update(id, post);
  }
}

export default new PostsService();
