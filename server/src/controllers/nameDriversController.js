const { Driver } = require("../db");
const { functControllerGen } = require("./functControllerGen");
const { Op } = require("sequelize");

const nameDriversController = async (searchName) => {

  await functControllerGen();

  // Realiza la búsqueda basada en forename
  let resultDrives = await Driver.findAll({
    where: {
      forename: {
        [Op.iLike]: `%${searchName}%`,
      },
    },
    limit: 15,
  });

  
  if (!resultDrives || resultDrives.length === 0) {
    resultDrives = await Driver.findAll({
      where: {
        surname: {
          [Op.iLike]: `%${searchName}%`,
        },
      },
      limit: 15,
    });
  }

  if (resultDrives && resultDrives.length > 0) {
    return resultDrives;
  } else {
    return `There is no match for ${searchName}, please try another forename or surname.`;
  }
};

module.exports = { nameDriversController };
