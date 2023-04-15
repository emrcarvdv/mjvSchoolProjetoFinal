import { IUser, User } from "../models/user.model";

class UserRepository {
  getAll() {
    return User.find({});
  }

  getByUsername(username: String) {
    return User.findOne({ username: username });
  }

  create(user: IUser) {
    return User.create(user);
  }

  update(username: String, user: Partial<IUser>) {
    return User.updateOne({ username: username }, { $set: user });
  }

  remove(username: String) {
    return User.deleteOne({ username: username });
  }
}

export default new UserRepository();
