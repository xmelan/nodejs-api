const { createContainer, asClass, asValue, asFunction } = require("awilix");

const config = require("../config");
const { HomeService } = require("../services");
const { HomeController } = require("../controllers");
const { HomeRoutes } = require("../routes/index.routes");
const Routes = require("../routes");
const container = createContainer();
const app = require(".");
const { User, Comment, Idea } = require("../models");

container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    HomeService: asClass(HomeService).tr(),
  })
  .register({
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
  })
  .register({
    HomeRoutes: asFunction(HomeRoutes).singleton(),
  })
  .register({
    User: asValue(User),
    Comment: asValue(Comment),
    Idea: asValue(Idea),
  });

module.exports = container;
