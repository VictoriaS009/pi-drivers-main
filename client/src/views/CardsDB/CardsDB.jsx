import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDrivers } from "../../redux/actions";
import { Link, useNavigate } from "react-router-dom";

const CardsDB = () => {
  const dispatch = useDispatch();
  const drivers = useSelector((state) => state.drivers);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getDriverId = (driver) => {
    return driver.idDB || driver.id;
  };

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDrivers = drivers
    .filter((driver) => driver.idDB) // Solo renderiza conductores con propiedad idDB
    .slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getDrivers());
      setLoading(false);
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <p>Loading drivers ...</p>
      ) : (
        <>
          {currentDrivers.map((driver) => (
            <div
              key={getDriverId(driver)}
              className="driver-card"
              onClick={() => navigate(`/detail/${getDriverId(driver)}`)}
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

export default CardsDB;
