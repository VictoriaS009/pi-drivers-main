const { teamsController } = require("../controllers/teamsController");


const getHandlerTeams = async (req, res) => {
  try {
    let respuesta = await teamsController();
    res.status(200).json({
      respuesta,
      message: "Data retrieved and saved successfully",
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getHandlerTeams };