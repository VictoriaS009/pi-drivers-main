import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDrivers } from "../../redux/actions";
import { useNavigate } from "react-router-dom";

const CardsAPI = () => {
  const dispatch = useDispatch();
  const drivers = useSelector((state) => state.drivers);
  const [loading, setLoading] = useState(true);
  const [sortedDrivers, setSortedDrivers] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);
  const navigate = useNavigate();

  const getDriverId = (driver) => {
    return driver.id && driver.id >= 1 && driver.id <= 508 ? driver.id : null;
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

  const handleSort = (order) => {
    // Copia el arreglo original y ordena según el criterio
    const sorted = [...drivers];
    sorted.sort((a, b) => {
      const dateA = new Date(a.dob);
      const dateB = new Date(b.dob);
      return order === "asc" ? dateA - dateB : dateB - dateA;
    });

    setSortedDrivers(sorted);
    setSortOrder(order);
  };

  return (
    <div>
      {loading ? (
        <p>Loading drivers ...</p>
      ) : (
        <>
          <div>
            <p>Do you want to sort by date ascending or descending?</p>
            <button onClick={() => handleSort("asc")}>Ascending</button>
            <button onClick={() => handleSort("desc")}>Descending</button>
          </div>
          {currentDrivers.map((driver) => {
            const driverId = getDriverId(driver);
            return driverId !== null ? (
              <div
                key={driverId}
                className="driver-card"
                onClick={() => navigate(`/detail/${driverId}`)}
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
            ) : null;
          })}
          <div className="paginationControls">
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
              disabled={indexOfLastItem >= sortedDrivers.length}
            >
              &gt;
            </button>
            <button
              className="paginationButton"
              onClick={() =>
                setCurrentPage(Math.ceil(sortedDrivers.length / itemsPerPage))
              }
              disabled={currentPage === Math.ceil(sortedDrivers.length / itemsPerPage)}
            >
              Last
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CardsAPI;


