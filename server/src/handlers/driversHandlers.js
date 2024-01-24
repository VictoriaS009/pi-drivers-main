const { driversController } = require("../controllers/driversController");
const { idDriversController } = require("../controllers/IdDriversController");


const getHandlerDrivers = async (req, res) => {
  try {
    let respuesta = await driversController();

    res.status(200).json({
      respuesta,
      message: "Data retrieved and saved successfully",
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getHandlerDriversById = async (req, res) =>  {
  try {
    const id = parseInt(req.params.id.slice(1)); //en este caso req está llegando por params; id se desestructura
    console.log(id);
    let respuesta = await idDriversController(id);
    res.status(200).send({
      message: `detalle del ${id} del usuario`,
      respuesta,
    }
    )
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }

   
};

const getHandlerDriversByName = (req, res) => {
    const { name } = req.query; // en este caso req está llegando por query, por lo tanto para extraer el name se desestructura
    res.status(200).send(`aquí están todos los usuarios con el nombre ${name}`);
  };

  const postHandlerDriver = (req, res) => {
    const { name, surname, age } = req.body; // en este caso req está llegando por body, por lo tanto para extraer los datos se desestructura
    res.status(201).send(`usuario creado correctamente con los datos ${name}, ${surname}, ${age}`);
  };


  module.exports = {
    getHandlerDrivers,
    getHandlerDriversById,
    getHandlerDriversByName,
    postHandlerDriver
};




