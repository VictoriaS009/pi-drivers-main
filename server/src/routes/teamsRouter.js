const {Router} = require("express");
const {getHandlerTeams} = require("../handlers/teamsHandlers");

const teamsRouter = Router();


teamsRouter.get("/drivers", getHandlerTeams);

module.exports = teamsRouter;

