import React from 'react';
import { useNavigate } from 'react-router-dom';
const Card = ({driver}) => {

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
      width: '45rem',
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

  const navigate = useNavigate();
  const getDriverId = (driver) => {
    return driver.idDB || driver.id; 
  };
  return (
    <div
    style={driverCardStyle}
    
    onClick={() => navigate(`/detail/${getDriverId(driver)}`)}
    >
          {/* {console.log("🚀 ~ Card ~ getDriverId(driver):", getDriverId(driver))} */}
          <img src={driver.image} alt={driver.name} style={driverImageStyle} />
          <div className="teams" style={teamsStyle}>
          <h3>{driver.name}</h3>
            <h4>Teams:</h4>
            <ul>
              {driver.teams.map((team, index) => (
                <li key={index}>{team}</li>
              ))}
            </ul>
          <h4>Birthdate: {driver.dob}</h4>
          <p>Click on the image to get more information about the driver.</p>
          </div>
        </div>
  )
}

export default Card