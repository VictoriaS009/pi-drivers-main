const { driversController } = require("../controllers/driversController");


const getHandlerDrivers = (req, res) => {
    res.status(200).send("aquí están todos los usuarios");
};

const getHandlerDriversById = (req, res) =>  {
    const {id} = req.params; //en este caso req está llegando por params, por lo tanto para extraer el id se desestructura
    res.status(200).send(`detalle del ${id} del usuario`)
};

const getHandlerDriversByName = (req, res) => {
    const { name } = req.query; // en este caso req está llegando por query, por lo tanto para extraer el name se desestructura
    res.status(200).send(`aquí están todos los usuarios con el nombre ${name}`);
  };

  const postHandlerDriver = (req, res) => {
    const { name, surname, age } = req.body; // en este caso req está llegando por body, por lo tanto para extraer los datos se desestructura
    res.status(201).send(`usuario creado correctamente con los datos ${name}, ${surname}, ${age}`);
  };

  /*
  const axios = require("axios");
const { Driver } = require("../db");

async function getDrivers(req, res) {
  try {
    let drivers = [];

    const [response, responseDB] = await Promise.all([
      axios.get("http://localhost:5000/drivers"),
      Driver.findAll(),
    ]);

    drivers = [...response.data, ...responseDB];

    res.send(drivers);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = getDrivers;
  */


  module.exports = {
    getHandlerDrivers,
    getHandlerDriversById,
    getHandlerDriversByName,
    postHandlerDriver
};



teamsArray.forEach((team, index, array) => {
  array[index] = team.trim();
});



let tableDrivers = await Driver.findAll();

if (tableDrivers.length > 0 && id < 509) {
  let driver = await tableDrivers.findOne({
    where: {
      idAPI: id,
    },
  });
  if (driver) {
    return driver;
  }
}; // si aún no hay idAPI en db