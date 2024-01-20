const { Router } = require("express");
const driverRouter = require("./driversRouter");
const teamsRouter = require("./teamsRouter");
//require todos los routers
//const usersRouter = require("./usersRouter")


const mainRouter = Router();
/*
mainRouter.use("/users", usersRouter);

mainRouter.use("/posts", postRouter)

*/




mainRouter.get("/drivers", getDrivers);

mainRouter.get("/drivers/:id", getDriversById);

mainRouter.get("/driver", getDriversByName);

mainRouter.post("/drivers", postDriver);

mainRouter.get("/teams", getTeams);




module.exports = mainRouter;
