let _homeService = null;

class HomeCrontoller {
  constructor({ HomeService }) {
    _homeService = HomeService;
  }

  index(req, res) {
    return res.send(_homeService.index());
  }
}

module.exports = HomeCrontoller;
