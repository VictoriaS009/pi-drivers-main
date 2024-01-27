const { Driver } = require("../db");
const { functControllerGen } = require("./functControllerGen");


const idDriversController = async (num) => {

  try {
    await functControllerGen();

    let driver = await Driver.findOne({
      where: {
        idAPI: num,
      },
    });

    const respuesta = () => {
      if(driver) {
        return driver;
      } else {
        return "No drivers associated with the entered id have been found."
      }
    
    }
    return respuesta();
    } catch (error) {
      console.error("Error:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { idDriversController };