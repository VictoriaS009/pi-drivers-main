const { driversController } = require("../controllers/driversController");
const { idDriversController } = require("../controllers/IdDriversController");
const { nameDriversController } = require("../controllers/nameDriversController");
const { postDriversController } = require("../controllers/postDriversController");

const getHandlerDrivers = async (req, res) => {
  try {
    let respuesta = await driversController();

    res.status(200).json({
      message: "Data retrieved and saved successfully",
      respuesta,
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getHandlerDriversById = async (req, res) =>  {
  try {
    const { id } = req.params; //en este caso req está llegando por params; id se desestructura
    let respuesta = await idDriversController(id);
    res.status(200).send({
      message: `User details with id: ${id}`,
      respuesta,
    }
    )
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }

   
};

const getHandlerDriversByName = async (req, res) => {
    try {
    const { name } = req.query; // en este caso req está llegando por query
    
    let respuesta = await nameDriversController(name);
    res.status(200).send({
      message: name,
      answer: respuesta,
    });
    } catch (error) {
      console.error("Error:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  const postHandlerDriver = async (req, res) => {
    
    try {
      const { forename, surname, description, image, nationality, teams, dob } = req.body;
    
      let DataDriver = await postDriversController(forename, surname, description, image, nationality, teams, dob);
      res.status(200).send({
        answer: {
          DataDriver,
        }
      });
      } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
      }
  };


  module.exports = {
    getHandlerDrivers,
    getHandlerDriversById,
    getHandlerDriversByName,
    postHandlerDriver
};




