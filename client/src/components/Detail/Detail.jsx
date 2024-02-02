import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDriver } from "../../redux/actions";

const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const driver = useSelector((state) => state.driver);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getDriver(id));
    };

    fetchData();
  }, [dispatch, id]);

// Estilos en línea
const driverDetailStyle = {
  backgroundColor: '#000',
  border: '1px solid #e1e4e8',
  borderRadius: '50px',
  padding: '20px',
  margin: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  color: '#ffffff',
};

const driverImageStyle = {
  height: '20rem',
  width: 'auto',
  borderRadius: '25px',
};

const teamsStyle = {
  listStyleType: 'none',
  paddingLeft: '0',
  textAlign: 'center',
};


  return (
<div>
      {driver ? (
        <div style={driverDetailStyle}>
          <h2>{driver.forename} {driver.surname}</h2>
          <img src={driver.image} alt={driver.name} style={driverImageStyle} />
          <p>{driver.description || "No description available."}</p>
          <p>Nationality: {driver.nationality}</p>
          <p>Date of Birth: {driver.dob}</p>
          <div style={teamsStyle}>
            <h4>Teams:</h4>
            <ul>
              {driver.teams && driver.teams.length > 0 ? (
                driver.teams.map((team, index) => (
                  <li key={index}>{team}</li>
                ))
              ) : (
                <li>No team information available</li>
              )}
            </ul>
          </div>
        </div>
      ) : (
        <p>Loading driver details...</p>
      )}
    </div>
  );
};

export default Detail;