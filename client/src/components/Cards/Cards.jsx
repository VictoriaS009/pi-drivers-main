import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDrivers } from "../../redux/actions";
import { Link, useNavigate } from "react-router-dom";

const Cards = () => {
  // Hooks para Redux
  const dispatch = useDispatch(); 
  const drivers = useSelector((state) => state.drivers); 
  const [loading, setLoading] = useState(true); 
  const navigate = useNavigate(); // da f navigate para moverse entre rutas

  
  const getDriverId = (driver) => {
    return driver.idDB || driver.id; 
  };

  // Pag: Definiendo estados y lógica
  const [currentPage, setCurrentPage] = useState(1); // pag actual
  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage; // índice del último elemento en la página actual (1*9)
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; // índice del primer elemento en la página actual
  const currentDrivers = drivers.slice(indexOfFirstItem, indexOfLastItem); // lista de conductores a mostrar

  // useEffect: Operaciones al montar el componente (carga de conductores)
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getDrivers()); // traer la info de conductores
      setLoading(false); // ya no estamos cargando, todo ok
    };

    fetchData(); // ejecuta la función asincrónica
  }, [dispatch]); // solo se ejecuta cuando el dispatch cambia, no siempre


 // Estilos en línea
 const driverCardStyle = {
  backgroundColor: '#000', 
  border: '1px solid #e1e4e8',
  borderRadius: '50px',
  padding: '20px',
  margin: '10px',
  cursor: 'pointer',
  transition: 'transform 0.3s',
  display: 'flex',
  gap: '40px',
};

const driverImageStyle = {
  height: '20rem',
  width: 'auto',
  borderRadius: '25px',

  marginBottom: '10px'
};

const teamsStyle = {
  listStyleType: 'none',
  paddingLeft: '0',
  gap: '10px',
};

const paginationControlsStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '20px 0'
};

const paginationButtonStyle = {
  backgroundColor: '#0366d6', // azul
  color: '#ffffff',
  padding: '10px 20px',
  margin: '0 5px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1em',
  transition: 'background-color 0.3s'
};

const paginationButtonHover = {
  backgroundColor: '#004080' // azul oscuro
};

  return (
    <div>
      {loading ? (
        <p>Loading drivers ...</p> // mostramos esto mientras cargamos los conductores
      ) : (
        <>
          {currentDrivers.map((driver) => (
        <div
          key={getDriverId(driver)}
          style={driverCardStyle}

          onClick={() => navigate(`/detail/${getDriverId(driver)}`)}
        >
          <img src={driver.image} alt={driver.name} style={driverImageStyle} />
          <div className="teams" style={teamsStyle}>
          <h3>{driver.name}</h3>
            <h4>Teams:</h4>
            <ul>
              {driver.teams.map((team, index) => (
                <li key={index}>{team}</li>
              ))}
            </ul>
          <p>Click on the image to get more information about the driver.</p>
          </div>
        </div>
      ))}
          {/* Controles de paginación para navegar entre páginas de conductores */}
          <div style={paginationControlsStyle}>
            <button
              className="paginationButton"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              First
            </button>
            <button
              className="paginationButton"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            <span>{currentPage}</span>
            <button
              className="paginationButton"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={indexOfLastItem >= drivers.length}
            >
              &gt;
            </button>
            <button
              className="paginationButton"
              onClick={() =>
                setCurrentPage(Math.ceil(drivers.length / itemsPerPage))
              }
              disabled={currentPage === Math.ceil(drivers.length / itemsPerPage)}
            >
              Last
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cards;
