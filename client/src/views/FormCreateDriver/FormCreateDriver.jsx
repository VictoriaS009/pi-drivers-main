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
  const [errorMessage, setErrorMessage] = useState("");

  const validateInputs = (forename, surname, nationality, image, date) => {
    const nameRegex = /^[A-Z][a-zA-Z]*$/;

    if (!nameRegex.test(forename) || !nameRegex.test(surname) || !nameRegex.test(nationality)) {
      setErrorMessage(
        "Forename, Surname, and Nationality must begin with a capital letter and cannot contain spaces. Only characters from the English alphabet are allowed."
      );
      return false;
    }

    if (description.includes("no description") && description !== "This **driver** does not have a description available.") {
      setErrorMessage("Invalid description format.");
      return false;
    }

    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (image !== "" && !urlRegex.test(image)) {
      setErrorMessage("Invalid image URL format.");
      return false;
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (date !== "" && !dateRegex.test(date)) {
      setErrorMessage("Invalid date of birth format.");
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const handleSend = async () => {
    if (!validateInputs(forename, surname, nationality, image, date)) {
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
        dob: date, //?.split("T")[0]
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

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  const formStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '20px',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '10px',
    border: '1px solid #e1e4e8',
    backgroundColor: '#fff',
    color: '#000'
  };

  const buttonStyle = {
    backgroundColor: '#0366d6',
    color: '#ffffff',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '10px',
    marginTop: '10px'
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
        <p>
          <strong>Forename, Surname, and Nationality</strong> must begin with a capital letter and cannot contain spaces. Only characters from the English alphabet are allowed.
        </p>
        <div>
        <label style={labelStyle}>Forename:</label>
          <input
            type="text"
            value={forename}
            onChange={(e) => setForename(e.target.value)}
            placeholder="Daniel"
          />
        </div>
        <div>
          <label style={labelStyle}>Surname:</label>
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Rabinovich"
          />
        </div>
        <div>
          <label style={labelStyle}>Nationality:</label>
          <input
            type="text"
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            placeholder="Argentine"
          />
        </div>
        <div>
          <label style={labelStyle}>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="This data is not necessary"
          />
        </div>
        <div>
          <label style={labelStyle}>Image:</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="You can add a web link from an image"
          />
        </div>
        <div>
          <label style={labelStyle}>Date of Birth:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value.split("T")[0])}
          />
        </div>
        <div>
          <label style={labelStyle}>Teams:</label>
          {teams.map((team) => (
            <div key={team.id}>
              <input
                type="checkbox"
                id={team.name}
                value={team.name}
                checked={selectedTeams.includes(team.name)}
                onChange={() => handleTeamChange(team.name)}
              />
              <label htmlFor={team.name}>{team.name}</label>
            </div>
          ))}
        </div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <button type="button" onClick={handleSend}>
          Send Driver
        </button>
      </form>
    </div>
  );
};

export default FormCreateDriver;
