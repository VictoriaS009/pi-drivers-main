const axios = require("axios");
const { Driver } = require("../db");
require("dotenv").config();

const { API } = process.env;

const driversController = async () => {
  let tableDrivers = await Driver.findAll();

  if (tableDrivers.length > 0) {
    return tableDrivers;
  }

  const { data } = await axios.get(API);

  const driversArray = [];

  data.forEach(obj => {
    const {
      name: { forename, surname },
      nationality,
      dob,
    } = obj;

    if (obj.image.url) {
      var { image: { url } } = obj;
    } else {
      var url = "http://nosoyurl.com";
    };

    if (obj.description) {
      var { description } = obj;
    } else {
      var description = "This **driver** does not have a description available.";
    };
    

    class Driver001 {
      constructor(forename, surname, description, image, nationality, dob) {
        this.forename = forename;
        this.surname = surname;
        this.description = description;
        this.image = image;
        this.nationality = nationality;
        this.dob = dob;
      }
    };

    const soyDriver = new Driver001(forename, surname, description, url, nationality, dob);
   

    driversArray.push(soyDriver);
  });

  // Almacenar información en la tabla Drivers
  await Driver.bulkCreate(driversArray);

  tableDrivers = await Driver.findAll();
  return tableDrivers;
};

module.exports = { driversController };
