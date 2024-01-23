require("dotenv").config();
const { Sequelize } = require("sequelize");
const DriverModel = require("./models/DriverModel");
const TeamModel = require("./models/TeamModel");


const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/drivers`, {
  logging: console.log('Connected to DB...'),   
  native: false, 
});
// Definición de modelos
DriverModel(sequelize);
TeamModel(sequelize);
// relaciones
const { Driver, Team } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

Driver.belongsToMany(Team, {through: 'driver_team'});
Team.belongsToMany(Driver, {through: 'driver_team'});

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};



