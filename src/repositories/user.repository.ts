import { IUser, User } from "../models/user.model";

class UserRepository {
  getAll() {
    return User.find();
  }

  getByUsername(username: String) {
    return User.findOne({ username: username });
  }

  createUser(user: IUser) {
    return User.create(user);
  }

  updateUser(username: String, user: Partial<IUser>) {
    return User.updateOne({ username: username }, { $set: user });
  }

  removeUser(username: String) {
    return User.deleteOne({ username: username });
  }
}

export default new UserRepository();
