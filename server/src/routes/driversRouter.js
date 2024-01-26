
const {Router} = require("express");
const { getHandlerDrivers, getHandlerDriversById, getHandlerDriversByName, postHandlerDriver } = require("../handlers/driversHandlers");


const driversRouter = Router();


driversRouter.get("/", getHandlerDrivers);

driversRouter.get("/driver/", getHandlerDriversByName);

driversRouter.get("/:id", getHandlerDriversById);

driversRouter.post("/", postHandlerDriver);



module.exports = driversRouter;


