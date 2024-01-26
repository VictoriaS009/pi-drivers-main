const { Driver } = require("../db");
const { functControllerGen } = require("./functControllerGen");


const idDriversController = async (num) => {

await functControllerGen();

if (num < 509) {
  let driver = await Driver.findOne({
    where: {
      idAPI: num,
    },
  });
  return driver;
  } else{
        return "No drivers associated with the entered id have been found."
  };
};

module.exports = { idDriversController };