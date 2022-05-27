let _authService = null;
class AuthController {
  constructor({ AuthService }) {
    _authService = AuthService;
  }

  async signIn(req, res) {
    const { body } = req;
    const createdUser = await _authService.signIn(body);
    return res.status(201).send(createdUser);
  }

  async signUp(req, res) {
    const { body } = req;
    const cred = await _authService.signUp(body);
    return res.status(200).send(cred);
  }
}

module.exports = AuthController;
