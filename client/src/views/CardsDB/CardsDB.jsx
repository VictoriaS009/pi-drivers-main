import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDrivers } from "../../redux/actions";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/Card/CArd";
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
        <p>Loading drivers ...</p>
      ) : (
        <>
          {currentDrivers.map((driver) => (
            <Card key={getDriverId(driver)} driver={driver} />
          
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
