import style from "./FormCreateDriver.css";
import { getTeams, postDriver } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

function Form() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeams());
  }, []);

  const teams = useSelector((state) => state.teams);

  const [driverData, setDriverData] = useState({
    forename: "",
    surname: "",
    description: "",
    image: "",
    nationality: "",
    teamIds: [],
    dob: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      const updatedTeamsIds = checked
        ? [...driverData.teamIds, value]
        : driverData.teamIds.filter((teamId) => teamId !== value);
      setDriverData({
        ...driverData,
        teamIds: updatedTeamsIds,
      });
    } else {
      setDriverData({
        ...driverData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postDriver(driverData));
    setDriverData({
      forename: "",
      surname: "",
      description: "",
      image: "",
      nationality: "",
      teamIds: [],
      dob: "",
    });
  };

  return (
    <div className={style.mainContainer}>
      <h2 className={style.title}>¡Crea a tu Driver!</h2>
      <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="forename">Nombre</label>
        <input
          type="text"
          id="forename"
          name="forename"
          onChange={handleChange}
        />

        <label htmlFor="surname">Apellido</label>
        <input
          type="text"
          id="surname"
          name="surname"
          onChange={handleChange}
        />

        <label htmlFor="description">Descripcion</label>
        <input
          type="text"
          id="description"
          name="description"
          onChange={handleChange}
        />

        <label htmlFor="image">Imagen</label>
        <input type="text" id="image" name="image" onChange={handleChange} />

        <label htmlFor="nationality">Nacionalidad</label>
        <input
          type="text"
          id="nationality"
          name="nationality"
          onChange={handleChange}
        />

        <label htmlFor="dob">Fecha de nacimiento</label>
        <input type="date" id="dob" name="dob" onChange={handleChange} />

        <label htmlFor="teamIds">Equipos</label>
        {/* <input type="text" id="equipoteamIds" name="equipoteamIds" /> */}
        <div className={style.cheboxTeams}>
          {teams.map((team) => {
            return (
              <div key={team.id}>
                <input
                  type="checkbox"
                  id={team.id}
                  name={team.nombre}
                  value={team.id}
                  checked={driverData.teamIds.includes(String(team.id))}
                  onChange={handleChange}
                />
                <label className={style.labelCheck} htmlFor={team.id}>
                  {team.nombre}
                </label>
              </div>
            );
          })}
        </div>

        <button type="submit" className={style.button}>
          Crear
        </button>
      </form>
    </div>
  );
}

export default Form;
