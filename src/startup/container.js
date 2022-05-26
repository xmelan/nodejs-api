const { createContainer, asClass, asValue, asFunction } = require("awilix");

const config = require("../config");
const {
  HomeService,
  UserService,
  IdeaService,
  CommentService,
} = require("../services");
const {
  HomeController,
  UserController,
  IdeaController,
  CommentController,
} = require("../controllers");
const {
  HomeRoute,
  UserRoute,
  IdeaRoute,
  CommentRoute,
} = require("../routes/index.routes");
const Routes = require("../routes");
const container = createContainer();
const app = require(".");
const { User, Comment, Idea } = require("../models");
const {
  UserRepository,
  IdeaRepository,
  CommentRepository,
} = require("../repositories");

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    HomeService: asClass(HomeService).singleton(),
    IdeaService: asClass(IdeaService).singleton(),
    CommentService: asClass(CommentService).singleton(),
    UserService: asClass(UserService).singleton(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    UserController: asClass(UserController.bind(UserController)).singleton(),
    IdeaController: asClass(IdeaController.bind(IdeaController)).singleton(),
    CommentController: asClass(
      CommentController.bind(CommentController)
    ).singleton(),
  })
  .register({
    HomeRoute: asFunction(HomeRoute).singleton(),
    IdeaRoute: asFunction(IdeaRoute).singleton(),
    UserRoute: asFunction(UserRoute).singleton(),
    CommentRoute: asFunction(CommentRoute).singleton(),
  })
  .register({
    User: asValue(User),
    Comment: asValue(Comment),
    Idea: asValue(Idea),
  })
  .register({
    UserRepository: asClass(UserRepository).singleton(),
    IdeaRepository: asClass(IdeaRepository).singleton(),
    CommentRepository: asClass(CommentRepository).singleton(),
  });

module.exports = container;
