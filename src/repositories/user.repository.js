const BaseRepository = require("./base.repository");
let _user = null;
class UserRepository extends BaseRepository {
  constructor({ User }) {
    super();
    _user = User;
  }

  async getuserByUsername(username) {
    {
      return await _user.findOne({ username: username });
    }
  }
}

module.exports = UserRepository;
