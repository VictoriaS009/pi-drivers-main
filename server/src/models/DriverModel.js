const { DataTypes } = require("sequelize");
// Export f que define el modelo
// inject la conex a sequelize.

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
      idAPI: {
        type:DataTypes.INTEGER,
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
        type: DataTypes.TEXT,
        allowNull: false,
      },
      teams: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      nationality: {
        type: DataTypes.STRING,
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