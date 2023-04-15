import { IPost, Post } from "../models/post.model";

class PostRepository {
  getAll() {
    return Post.find();
  }

  getByAuthor(username: String) {
    return Post.find({ authorUsername: username });
  }

  createPost(post: IPost) {
    return Post.create(post);
  }

  updatePost(id: String, post: Partial<IPost>) {
    return Post.updateOne({ id: id }, { $set: post });
  }

  removePost(id: String) {
    return Post.deleteOne({ id: id });
  }
}

export default new PostRepository();
