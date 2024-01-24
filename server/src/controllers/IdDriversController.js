const axios = require("axios");
const { Driver } = require("../db");
const { driversController } = require("./driversController");
require("dotenv").config();

const { API } = process.env;

const idDriversController = async (num) => {

tableDrivers = await driversController();

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