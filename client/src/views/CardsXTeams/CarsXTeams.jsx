import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeams, getDrivers } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const CarsXTeams = () => {
  // Hooks para Redux
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams);
  const drivers = useSelector((state) => state.drivers);
  const [selectedTeam, setSelectedTeam] = useState(""); // Estado para el equipo seleccionado
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // useEffect: Operaciones al montar el componente (carga de equipos y conductores)
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getTeams()); // Traer la información de equipos
      await dispatch(getDrivers()); // Traer la información de conductores
      setLoading(false); // Ya no estamos cargando, todo ok
    };

    fetchData(); // Ejecuta la función asincrónica
  }, [dispatch]); // Solo se ejecuta cuando el dispatch cambia, no siempre

  // Función para manejar el clic en un equipo
  const handleTeamClick = (team) => {
    setSelectedTeam(team);
  };

  return (
    <div>
      {loading ? (
        <p>Loading teams ...</p>
      ) : (
        <>
          <div className="team-buttons">
            {teams.map((team, index) => (
              <button
                key={index}
                className={selectedTeam === team.name ? "selected" : ""}
                onClick={() => handleTeamClick(team.name)}
              >
                {team.name}
              </button>
            ))}
          </div>
          {/* Muestra los conductores filtrados por equipo */}
          <div>
            {drivers
              .filter((driver) => {
                // Filtra los conductores que pertenecen al equipo seleccionado
                return driver.teams.includes(selectedTeam);
              })
              .map((driver) => (
                <div
                  key={driver.idDB || driver.id}
                  className="driver-card"
                  onClick={() => navigate(`/detail/${driver.idDB || driver.id}`)}
                >
                  <h3>{driver.name}</h3>
                  <img src={driver.image} alt={driver.name} className="driver-image" />
                  <div className="teams">
                    <h4>Teams:</h4>
                    <ul>
                      {driver.teams.map((team, index) => (
                        <li key={index}>{team}</li>
                      ))}
                    </ul>
                  </div>
                  <p>Click on the image to get more information about the driver.</p>
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CarsXTeams;
