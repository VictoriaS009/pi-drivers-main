
const {Router} = require("express");
const { getHandlerDrivers, getHandlerDriversById, getHandlerDriversByName, postHandlerDriver } = require("../handlers/driversHandlers");
const driversRouter = Router();


driversRouter.get("/", getHandlerDrivers);

driversRouter.get("/:id", getHandlerDriversById);

driversRouter.get("/name", getHandlerDriversByName);

driversRouter.post("/", postHandlerDriver);



module.exports = driversRouter;


/*
 en este caso los handlers se importarán
****.get("/", (req, res) => {
    res.status(200).send("mensaje");
});

***.get("/:id", (req, res) =>  {
    res.status(200).send(`detalle del ${id} ...`)
})

*/