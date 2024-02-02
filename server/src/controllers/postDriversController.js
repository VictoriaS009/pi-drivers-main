const { Driver } = require("../db");
const axios = require("axios");
const { Op } = require("sequelize");

require("dotenv").config();
const { API } = process.env;

const postDriversController = async (forename, surname, description, image, nationality, teams, dob) => {
  try {
    // Encuentra un idDB disponible a partir de 509
    let idDB = 509;
    while (await Driver.findOne({ where: { idDB } })) {
      idDB++;
    }

    // Realiza la búsqueda basada en forename, surname, nationality
    let existingDriverDB = await Driver.findOne({
      where: {
        [Op.and]: [
          { forename: { [Op.iLike]: `%${forename}%` } },
          { surname: { [Op.iLike]: `%${surname}%` } },
          { nationality: { [Op.iLike]: `%${nationality}%` } },
        ],
      },
    });

    // Si ya existe un conductor con la misma información, retorna un mensaje
    if (existingDriverDB) {
      return `Driver ${forename} ${surname} is already in the database`;
    }

    const { data } = await axios.get(API);

    const existingDriverAPI = data.find((driver) =>
      driver.name.forename.toLowerCase().includes(forename.toLowerCase()) &&
      driver.name.surname.toLowerCase().includes(surname.toLowerCase()) &&
      driver.nationality.toLowerCase().includes(nationality.toLowerCase())
    );

    if (existingDriverAPI) {
      return `Driver ${forename} ${surname} is already in the API`;
    }

    // Crea un nuevo objeto Driver con el idDB generado y almacénalo en la base de datos
    const newDriver = await Driver.create({
      idDB,
      forename,
      surname,
      description,
      image,
      nationality,
      teams,
      dob: dob.split("T")[0],
    });

    console.log("A new driver has been stored in the database:", newDriver.toJSON());

    return newDriver;
  } catch (error) {
    console.error("Error:", error.message);
    throw error; // Re-lanza el error para que pueda ser manejado por el middleware de error
  }
};

module.exports = { postDriversController };
