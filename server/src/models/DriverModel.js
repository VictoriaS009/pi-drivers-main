const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const DriverModel = (sequelize) => {
  // Define el modelo
  sequelize.define(
    'Driver',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      forename: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      surname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      nationality: {
        type: DataTypes.ARRAY(DataTypes.STRING), // ARRAY NACIONALIDAD
        allowNull: false,
      },
      teams: {
        type: DataTypes.ARRAY(DataTypes.INTEGER),
        allowNull: false,
      },
      dob: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};

module.exports = DriverModel;