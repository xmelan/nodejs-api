let _commentService = null;
class CommentController {
  constructor({ CommentService }) {
    _commentController = CommentService;
  }

  async get(req, res) {
    const { commentId } = req.params;
    const comment = await _commentService.get(commentId);
    return res.send(comment);
  }

  async update(req, res) {
    const { body } = req;
    const { commentId } = req.params;
    const updatedComment = await _commentService.update(commentId, body);
    return res.send(updatedComment);
  }

  async delete(req, res) {
    const { commentId } = req.params;
    const deletedComment = await _commentService.delete(commentId);
    return res.send(deletedComment);
  }

  async getIdeadsComments(req, res) {
    const { ideaId } = req.params;
    const comments = await _commentService.getIdeadsComments(ideaId);
    return res.send(comments);
  }
  async createdComment(req, res) {
    const { body } = req;
    const { ideaId } = req.params;
    const createdComment = await _commentService.createdComment(body, ideaId);
    return res.status(201).send(createdComment);
  }
}

module.exports = CommentController;
