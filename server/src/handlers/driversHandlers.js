


const getHandlerDrivers = (req, res) => {
    res.status(200).send("aquí están todos los usuarios");
};

const getHandlerDriversById = (req, res) =>  {
    const {id} = req.params; //en este caso req está llegando por params, por lo tanto para extraer el id se desestructura
    res.status(200).send(`detalle del ${id} del usuario`)
};

module.exports = {
    getHandlerDrivers,
    getHandlerDriversById,
    getHandlerDriversByName,
    postHandlerDriver
};




