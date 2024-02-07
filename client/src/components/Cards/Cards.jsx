import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDrivers } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import Card from "../Card/Card"; // Asegúrate de ajustar la importación del componente Card según la ubicación real

const Cards = () => {
  const dispatch = useDispatch();
  const drivers = useSelector((state) => state.drivers);
  const [loading, setLoading] = useState(true);
  const [sortedDrivers, setSortedDrivers] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);
  const [initialSortDone, setInitialSortDone] = useState(false); // Nuevo estado para el orden inicial
  const navigate = useNavigate();

  const getDriverId = (driver) => {
    return driver.idDB || driver.id;
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDrivers = sortedDrivers.slice(indexOfFirstItem, indexOfLastItem);
  
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getDrivers());
      setLoading(false);
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    // Realizar el ordenamiento inicial solo si no se ha realizado antes
    setSortedDrivers(drivers);
    if (!initialSortDone && drivers.length > 0) {
      handleSort("asc"); // Ordenar ascendente por defecto
      setInitialSortDone(true); // Marcar que el ordenamiento inicial ha sido realizado
    }
  }, [drivers, initialSortDone]);

  const handleSort = (order) => {
    // Copia el arreglo original y ordena según el criterio
    const sorted = [...drivers];
    sorted.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return order === "asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });

    setSortedDrivers(sorted);
    setSortOrder(order);
  };

   // Estilos en línea
   const cardsContainer = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 0'
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

  return (
    <div style={cardsContainer}>
      {loading ? (
        <p>Loading drivers ...</p>
      ) : (
        <>
          <div>
            <p>Do you want to sort alphabetically ascending or descending?</p>
            <button style={paginationButtonStyle} onClick={() => handleSort("asc")}>
              Ascending
            </button>
            <button style={paginationButtonStyle} onClick={() => handleSort("desc")}>
              Descending
            </button>
          </div>
          {currentDrivers.map((driver, index) => (
            <Card key={index} driver={driver} />
          ))}
          {/* Controles de paginación para navegar entre páginas de conductores */}
          <div style={paginationControlsStyle}>
            <button
              style={paginationButtonStyle}
              className="paginationButton"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              First
            </button>
            <button
              style={paginationButtonStyle}
              className="paginationButton"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            <span>{currentPage}</span>
            <button
              style={paginationButtonStyle}
              className="paginationButton"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={indexOfLastItem >= drivers.length}
            >
              &gt;
            </button>
            <button
              style={paginationButtonStyle}
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
