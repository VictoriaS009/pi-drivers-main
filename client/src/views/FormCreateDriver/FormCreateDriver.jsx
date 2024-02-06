import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postDriver, getTeams } from "../../redux/actions";

const FormCreateDriver = () => {
  const dispatch = useDispatch();
  const teams = useSelector((state) => state.teams);

  const [forename, setForename] = useState("");
  const [surname, setSurname] = useState("");
  const [nationality, setNationality] = useState("");
  const [description, setDescription] = useState("This **driver** does not have a description available.");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [selectedTeams, setSelectedTeams] = useState(["No team registration"]);
  const [errorMessages, setErrorMessages] = useState({
    forename: "",
    surname: "",
    nationality: "",
    date: "",
    image: ""
  });

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  useEffect(() => {
    validateInputs();
  }, [forename, surname, nationality, date, image]);

  const validateInputs = () => {
    const nameRegex = /^[A-Z][a-z]*$/;
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;

    setErrorMessages({
      forename: !nameRegex.test(forename) ? "Forename must begin with a capital letter and only contain characters from the English alphabet." : "",
      surname: !nameRegex.test(surname) ? "Surname must begin with a capital letter and only contain characters from the English alphabet." : "",
      nationality: !nameRegex.test(nationality) ? "Nationality must begin with a capital letter and only contain characters from the English alphabet." : "",
      date: !dateRegex.test(date) ? "Date of Birth must be in the format YYYY-MM-DD." : "",
      image: image && !urlRegex.test(image) ? "Please enter a valid web link for the image." : ""
    });
  };

  const handleSend = async () => {
    if (Object.values(errorMessages).some((msg) => msg !== "")) {
      return;
    }

    try {
      const driver = {
        forename,
        surname,
        nationality,
        description,
        image,
        teams: selectedTeams,
        dob: date,
      };

      await dispatch(postDriver(driver));
      setForename("");
      setSurname("");
      setNationality("");
      setDescription("This **driver** does not have a description available.");
      setImage("");
      setDate("");
      setSelectedTeams(["No team registration"]);
    } catch (error) {
      console.error("Error al enviar el objeto al servidor:", error);
    }
  };

  const handleTeamChange = (teamName) => {
    const updatedTeams = selectedTeams.includes(teamName)
      ? selectedTeams.filter((name) => name !== teamName)
      : [...selectedTeams, teamName];

    setSelectedTeams(updatedTeams);
  };

  const formStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '20px',
    borderRadius: '20px',
    display: 'grid',
    gridTemplateColumns: '3fr 1fr',
    gridGap: '20px',
    margin: '20px',
  };

  const gridAreaStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };

  const teamContainerStyle = {
    maxHeight: '580px', 
    overflowY: 'auto',  
    padding: '10px',
    border: '1px solid #e1e4e8', 
    borderRadius: '10px', 
    margin: '10px 0' 
  };

  const bottomSectionStyle = {
    gridColumn: '1 / -1',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '10px',
    border: '1px solid #e1e4e8',
    backgroundColor: '#fff',
    color: '#000',
    width : '100%',    
  };
  const inputStyleCheck = {
    padding: '10px',
    borderRadius: '10px',
    border: '1px solid #e1e4e8',
    backgroundColor: '#fff',
    color: '#000',
  };

  const buttonStyle = {
    backgroundColor: '#0366d6',
    color: '#ffffff',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '10px',
    marginTop: '10px',
    opacity: Object.values(errorMessages).some((msg) => msg !== "") ? '0.5' : '1',
    pointerEvents: Object.values(errorMessages).some((msg) => msg !== "") ? 'none' : 'auto',
  };

  const labelStyle = {
    margin: '5px 0'
  };

  const errorMessageStyle = {
    color: 'red',
    marginTop: '10px'
  };

  return (
    <div>
      <h2 style={{ color: '#fff' }}>New Driver</h2>
      <form style={formStyle}>
        <div style={gridAreaStyle}>
          <p>
            <strong>Forename, Surname, and Nationality</strong> must begin with a capital letter and cannot contain spaces, besides, <strong>description</strong> must be between 30 and 500 characters. Only characters from the English alphabet are allowed.
          </p>
          <div>
            <label style={labelStyle}>Forename:</label>
            <input style={inputStyle}
              type="text"
              value={forename}
              onChange={(e) => setForename(e.target.value)}
              placeholder="Daniel"
            />
            {errorMessages.forename && <p style={errorMessageStyle}>{errorMessages.forename}</p>}
          </div>
          <div>
            <label style={labelStyle}>Surname:</label>
            <input style={inputStyle}
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Rabinovich"
            />
            {errorMessages.surname && <p style={errorMessageStyle}>{errorMessages.surname}</p>}
          </div>
          <div>
            <label style={labelStyle}>Nationality:</label>
            <input style={inputStyle}
              type="text"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              placeholder="Argentine"
            />
            {errorMessages.nationality && <p style={errorMessageStyle}>{errorMessages.nationality}</p>}
          </div>
          <div>
            <label style={labelStyle}>Description:</label>
            <textarea style={{...inputStyle, height: '87px', textJustify: 'start', textAlign: 'start' }}
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="This data is not necessary"
            />
          </div>
          <div>
            <label style={labelStyle}>Image:</label>
            <input style={inputStyle}
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="You can add a web link from an image"
            />
            {errorMessages.image && <p style={errorMessageStyle}>{errorMessages.image}</p>}
          </div>
          <div>
            <label style={labelStyle}>Date of Birth:</label>
            <input style={inputStyle}
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value.split("T")[0])}
            />
            {errorMessages.date && <p style={errorMessageStyle}>{errorMessages.date}</p>}
          </div>
        </div>
        <div style={gridAreaStyle}>
          <div>
            <label style={labelStyle}>Teams:</label>
            <div style={teamContainerStyle}>
              {teams.map((team) => (
                <div key={team.id}>
                  <input 
                    style={inputStyleCheck}
                    type="checkbox"
                    id={team.name}
                    value={team.name}
                    checked={selectedTeams.includes(team.name)}
                    onChange={() => handleTeamChange(team.name)}
                  />
                  <label htmlFor={team.name} style={labelStyle}>{team.name}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={bottomSectionStyle}>
          {Object.values(errorMessages).some((msg) => msg !== "") && <p style={errorMessageStyle}>Please fix the errors before submitting.</p>}
          <button type="button" onClick={handleSend} style={buttonStyle} disabled={Object.values(errorMessages).some((msg) => msg !== "")}> 
            Send Driver
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormCreateDriver;
