
const {Router} = require("express");
const {postHandlerDriver, getHandlerDriversById, getHandlerDriversByName, postHandlerDriver} = require("../handlers/driverHandlers");

const driversRouter = Router();


driversRouter.get("/drivers", getHandlerDrivers);

driversRouter.get("/drivers/:id", getHandlerDriversById);

driversRouter.get("/driver", getHandlerDriversByName);

driversRouter.post("/drivers", postHandlerDriver);





// --

const usersRouter = Router();
/* en este caso los handlers se importarán
usersRouter.get("/", (req, res) => {
    res.status(200).send("aquí están todos los usuarios");
});

usersRouter.get("/:id", (req, res) =>  {
    res.status(200).send(`detalle del ${id} del usuario`)
})
*/


driversRouter.get("/", getHandlerUsers);


driversRouter.get("/:id", getHandlerIdUsers);

module.exports = driversRouter;