const BaseService = require("./base.service");
let _commentService = null;
_ideaRepository = null;
class CommentService extends BaseService {
  constructor({ CommentService, IdeaRepository }) {
    super(CommentService);
    _commentService = CommentService;
    _ideaRepository = IdeaRepository;
  }
  async getIdeaComments(ideaId) {
    if (!ideaId) {
      const error = new Error();
      error.status = 400;
      error.message = err.message || "ideaId must be sent";
      throw error;
    }
    const idea = await _ideaRepository.get(ideaId);

    if (!idea) {
      const error = new Error();
      error.status = 404;
      error.message = err.message || "ideaId does not sent";
      throw error;
    }

    const { comments } = idea;
    return comments;
  }

  async createComments(comment, ideaId) {
    if (!ideaId) {
      const error = new Error();
      error.status = 400;
      error.message = err.message || "ideaId must be sent";
      throw error;
    }

    const createComment = await _commentService.create(comment);
    idea.comments.push(createComment);
    return await _ideaRepository.update(ideaId, { comments: idea.comments });
  }
}

module.exports = CommentService;
