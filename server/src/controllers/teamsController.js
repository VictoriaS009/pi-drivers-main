const axios = require("axios"); // para hacer solicitudes HTTP
const { Team } = require("../db");
require("dotenv").config();

const { API } = process.env;

const teamsController = async () => {
  try {
    let tableTeam = await Team.findAll();

    if (tableTeam.length > 0) {
      return tableTeam;
    }

    let uniqueTeamsSet = new Set();
    let uniqueTeamsArray = [];

    const { data } = await axios.get(API);

    // Recorrer data y extraer teams
    data.forEach((obj) => {
      if (obj.teams) {
        const teamsString = obj.teams;

        // Dividir la cadena en teams en un array
        const teamsArray = teamsString.split(',');

        // Agregar cada equipo al conjunto (Set) para evitar duplicados
        teamsArray.forEach((team) => uniqueTeamsSet.add(team.trim()));
      }
    });

    // Convertir el conjunto a un array
    uniqueTeamsArray = [...uniqueTeamsSet];

    // en este punto hay un array sin equipos repetidos
     // Ordenar alfabéticamente
     uniqueTeamsArray.sort();
    // Almacena los nombres de los equipos en la tabla Teams
    await Team.bulkCreate(uniqueTeamsArray.map((name) => ({ name })));
    tableTeam = await Team.findAll();

    return tableTeam;
  } catch (error) {
    console.error("Error:", error.message);
    throw new Error("Internal Server Error");
  }
};

module.exports = { teamsController };
