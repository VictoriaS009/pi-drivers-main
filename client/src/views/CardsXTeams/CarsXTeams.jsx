import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeams, getDrivers } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/CArd";

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
  const cardsContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0'
  }

  return (
    <div styles={cardsContainer}>
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
                <Card key={driver.idDB || driver.id} driver={driver} onClick={() => navigate(`/detail/${driver.idDB || driver.id}`)} />
  
              ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CarsXTeams;
