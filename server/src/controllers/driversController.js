const {Driver} =require("../db");

const createDriverBD = ()


/*

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




------------------------------------------------------------

const axios = require("axios");
const URL = "http://localhost:5000/drivers";
const { Driver, Team } = require("../db");

module.exports = async (req, res) => {
  try {
    const { data } = await axios(URL);

    data.map((driver) => {
      if (driver.image.url === "") {
        driver.image = {
          url: "https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png",
          imageby:
            "https://pixabay.com/es/vectors/automovilismo-deportes-de-motor-150157/",
        };
      }
      return driver;
    });

    const driversDB = await Driver.findAll();

    const idDrivers = driversDB.map((driver) => {
      return driver.id;
    });

    const teamsDB = await Team.findAll({
      where: { id: idDrivers },
      raw: true,
    });

    const dbDrivers = driversDB.map((driver) => {
      const relatedTeams = teamsDB
        .filter((team) => team.id === driver.id)
        .map((team) => team.name);

      return {
        id: driver.id,
        name: { forename: driver.forename, surname: driver.surname },
        image: { url: driver.image },
        dob: driver.dob,
        nationality: driver.nationality,
        teams: relatedTeams.shift(),
        description: driver.description,
      };
    });

    const allDrivers = [...data, ...dbDrivers];

    res.status(200).json(allDrivers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


*/