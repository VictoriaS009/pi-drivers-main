const axios = require("axios");
const { Driver } = require("../db");
const { functControllerGen } = require("./functControllerGen")
require("dotenv").config();

const { API } = process.env;

driversController = async () => {
  const response = await functControllerGen();
  return response;
}
module.exports = { driversController };
