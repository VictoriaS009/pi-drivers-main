const { Driver } = require("../db");
const { functControllerGen } = require("./functControllerGen");
const { Op } = require("sequelize");

const postDriversController = async (forename, surname, description, image, nationality, teams, dob) => {
  
  // función controladora general y espera a que se complete
  await functControllerGen();

  // Encuentra el máximo valor actual de idAPI
  //const idAPI = await Driver.max('idAPI') || 509

  // Encuentra un idAPI disponible a partir de 509
  let idAPI = 509;
  while (await Driver.findOne({ where: { idAPI } })) {
    idAPI++;
  }

  // Realiza la búsqueda basada en forename, surname, nationality y dob
  let existingDriver = await Driver.findOne({
    where: {
      [Op.and]: [
        { forename: { [Op.iLike]: `%${forename}%` } },
        { surname: { [Op.iLike]: `%${surname}%` } },
        { nationality: { [Op.iLike]: `%${nationality}%` } },
      ],
    },
  });

  // Si ya existe un conductor con la misma información, retorna un mensaje
  if (existingDriver) {
    return `Driver ${forename} ${surname} is already in the database`;
  }

  // Crea un nuevo objeto Driver con el idAPI generado y almacénalo en la base de datos
  const newDriver = await Driver.create({
    idAPI,
    forename,
    surname,
    description,
    image,
    nationality,
    teams,
    dob,
  });

  console.log("A new driver has been stored in the database:", newDriver.toJSON());
  
  return newDriver;
};

module.exports = { postDriversController };
