


const getHandlerDrivers = (req, res) => {
    res.status(200).send("aquí están todos los usuarios");
};

const getHandlerDriversById = (req, res) =>  {
    const {id} = req.params; //en este caso req está llegando por params, por lo tanto para extraer el id se desestructura
    res.status(200).send(`detalle del ${id} del usuario`)
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




