const { Driver } = require("../db");
const axios = require("axios");
require("dotenv").config();

const { API } = process.env;



const idDriversController = async (num) => {

  try {
    const { data } = await axios.get(API);
    const driverID = data.find((e) => e.id == num);
    

    if (driverID) {
      const {
        id,
        name: { forename, surname },
        nationality,
        dob,
      } = driverID;
  
      if (driverID.image.url) {
        var { image: { url } } = driverID;
      } else {
        var url = "https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png";
      };
  
      if (driverID.description) {
        var { description } = driverID;
      } else {
        var description = "This **driver** does not have a description available.";
      };
      
      if (driverID.teams) {
        var { teams } = driverID;
        var teamsArr = teams.split(',').map((e) => e.trim());
      } else {
        var teamsArr = ["No team registration"];
      };
  
      class Driver001 {
        constructor(id, forename, surname, description, image, nationality, teams, dob) {
          this.id= id;
          this.forename = forename;
          this.surname = surname;
          this.description = description;
          this.image = image;
          this.nationality = nationality;
          this.teams = teams;
          this.dob = dob;
        }
      };
  
      
      const soyDriverAPI = new Driver001(id, forename, surname, description, url, nationality, teamsArr, dob);
      return soyDriverAPI;
      
    };

    let driver = await Driver.findOne({
      where: {
        idDB: num,
      },
    });


    if (driver) {
        return driver;
      } else {
        return "No drivers associated with the entered id have been found."
      }

  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { idDriversController };