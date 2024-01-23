const { Router } = require("express");
const driversRouter = require("./driversRouter");
const teamsRouter = require("./teamsRouter");



const mainRouter = Router();

mainRouter.use("/drivers", driversRouter);

mainRouter.use("/teams", teamsRouter)




module.exports = mainRouter;
