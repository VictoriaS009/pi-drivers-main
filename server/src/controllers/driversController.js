const axios = require("axios");
const { Driver } = require("../db");
require("dotenv").config();

const { API } = process.env;

const driversController = async () => {
  try {
    const { data } = await axios.get(API);

    const driversArray = [];

    data.forEach((obj) => {
      try {
        const {
          name: { forename, surname },
          dob,
        } = obj;

        if (obj.image.url) {
          var url = obj.image.url;
        } else {
          var url = "https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png";
        };
    

        if (obj.teams) {
          var { teams } = obj;
          var teamsArr = teams.split(',').map((e) => e.trim());
        } else {
          var teamsArr = ["No team registration"];
        };

        const driverAPI = {
          name: `${forename} ${surname}`,
          image: url,
          teams: teamsArr,
          dob,
        };

        driversArray.push(driverAPI);
      } catch (innerError) {
        console.error("Error processing API data:", innerError.message);
      }
    });

    const tableDrivers = await Driver.findAll();

    if (tableDrivers.length > 0) {
      tableDrivers.forEach((e) => {
        const { forename, surname, image, teams } = e;

        const driverDB = {
          name: `${forename} ${surname}`,
          image,
          teams,
        };

        driversArray.push(driverDB);
      });
    }

    return driversArray;
  } catch (error) {
    console.error("Error fetching data from the API:", error.message);
    return [];
  }
};

module.exports = { driversController };
