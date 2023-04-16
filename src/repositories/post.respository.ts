import { IPost, Post } from "../models/post.model";

class PostRepository {
  getAll() {
    return Post.find();
  }

  getById(id: string) {
    return Post.findOne({ _id: id });
  }

  getByAuthor(username: String) {
    return Post.find({ authorUsername: username });
  }

  create(post: IPost) {
    return Post.create(post);
  }

  update(id: String, post: Partial<IPost>) {
    return Post.updateOne({ id: id }, { $set: post });
  }

  remove(id: String) {
    return Post.deleteOne({ id: id });
  }
}

export default new PostRepository();
