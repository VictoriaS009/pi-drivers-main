import { useState } from "react";
import { validation } from "./Validation";
import style from "./Form.module.css";

const Form = ({ createDriver }) => {
  const [driverCreated, setDriverCreated] = useState({
    forename: "",
    surname: "",
    description: "",
    image: "",
    nationality: "",
    dob: "",
    teams: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (evento) => {
    setDriverCreated({
      ...driverCreated,
      [evento.target.name]: evento.target.value,
    });
    setErrors(
      validation({
        ...driverCreated,
        [evento.target.name]: evento.target.value,
      })
    );
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    createDriver(driverCreated);
  };

  return (
    <>
      <div className={style.container}>
        <h1 className={style.title}>Create a Driver</h1>
        <div className={style.formContainer}>
          <form onSubmit={handleSubmit}>
            <label>
              Forename:
              <input
                type="text"
                id="forename"
                name="forename"
                value={driverCreated.forename}
                onChange={handleChange}
                placeholder="Ingrese su nombre..."
                className={style.inputForename}
              />
            </label>
            {errors.forename && (
              <span className={style.errorForename}>{errors.forename}</span>
            )}
            <br />
            <label>
              Surname:
              <input
                type="text"
                id="surname"
                name="surname"
                value={driverCreated.surname}
                onChange={handleChange}
                placeholder="Ingrese su apellido..."
                className={style.inputSurname}
              />
            </label>
            {errors.surname && (
              <span className={style.errorSurname}>{errors.surname}</span>
            )}

            <br />
            <label>
              Nationality:
              <select
                id="nationality"
                name="nationality"
                onChange={handleChange}
                defaultValue={"Select a nationality"}
                className={style.selectNationality}
              >
                <option value="Select a nationality" disabled="disabled">
                  Select a Nationality
                </option>
                <option value="Alemania">Alemania</option>
                <option value="Argentina">Argentina</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Bélgica">Bélgica</option>
                <option value="Brasil">Brasil</option>
                <option value="Canadá">Canadá</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Colombia">Colombia</option>
                <option value="Corea del Sur">Corea del Sur</option>
                <option value="Dinamarca">Dinamarca</option>
                <option value="Emiratos Árabes Unidos">
                  Emiratos Árabes Unidos
                </option>
                <option value="España">España</option>
                <option value="Estados Unidos">Estados Unidos</option>
                <option value="Finlandia">Finlandia</option>
                <option value="Francia">Francia</option>
                <option value="Hungría">Hungría</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Irlanda">Irlanda</option>
                <option value="Italia">Italia</option>
                <option value="Japón">Japón</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Luxemburgo">Luxemburgo</option>
                <option value="Malasia">Malasia</option>
                <option value="Marruecos">Marruecos</option>
                <option value="México">México</option>
                <option value="Mónaco">Mónaco</option>
                <option value="Noruega">Noruega</option>
                <option value="Nueva Zelanda">Nueva Zelanda</option>
                <option value="Países Bajos">Países Bajos</option>
                <option value="Polonia">Polonia</option>
                <option value="Portugal">Portugal</option>
                <option value="Reino Unido">Reino Unido</option>
                <option value="República Checa">República Checa</option>
                <option value="República Popular China">
                  República Popular China
                </option>
                <option value="Rodesia">Rodesia</option>
                <option value="Rusia">Rusia</option>
                <option value="Singapur">Singapur</option>
                <option value="Sudáfrica">Sudáfrica</option>
                <option value="Suecia">Suecia</option>
                <option value="Suiza">Suiza</option>
                <option value="Tailandia">Tailandia</option>
                <option value="Turquía">Turquía</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Venezuela">Venezuela</option>
              </select>
            </label>
            {errors.nationality && (
              <span className={style.errorNationality}>
                {errors.nationality}
              </span>
            )}

            <br />

            <label>
              Teams:
              <select
                id="teams"
                name="teams"
                onChange={handleChange}
                defaultValue={"Select a team"}
                className={style.selectTeams}
              >
                <option value="Select a team" disabled="disabled">
                  Select a Team
                </option>
                <option value="AGS">AGS</option>
                <option value="Alpine">Alpine</option>
                <option value="Alfa Romeo">Alfa Romeo</option>
                <option value="Andrea Moda">Andrea Moda</option>
                <option value="Arrows">Arrows</option>
                <option value="Aston Martin">Aston Martin</option>
                <option value="ATS">ATS</option>
                <option value="BAR">BAR</option>
                <option value="Benetton">Benetton</option>
                <option value="BMW Sauber">BMW Sauber</option>
                <option value="Boro">Boro</option>
                <option value="Brabham">Brabham</option>
                <option value="Brawn">Brawn</option>
                <option value="BRM">BRM</option>
                <option value="Bruno Giacomelli">Bruno Giacomelli</option>
                <option value="Caterham">Caterham</option>
                <option value="Coloni">Coloni</option>
                <option value="Cooper">Cooper</option>
                <option value="Courage Compétition">Courage Compétition</option>
                <option value="Dallara">Dallara</option>
                <option value="DAMS">DAMS</option>
                <option value="De Tomaso">De Tomaso</option>
                <option value="Ecurie Maarsbergen">Ecurie Maarsbergen</option>
                <option value="Eifelland">Eifelland</option>
                <option value="Emeryson">Emeryson</option>
                <option value="Ensign">Ensign</option>
                <option value="EuroBrun">EuroBrun</option>
                <option value="Ferrari">Ferrari</option>
                <option value="Finotto">Finotto</option>
                <option value="Fittipaldi">Fittipaldi</option>
                <option value="Force India">Force India</option>
                <option value="Footwork">Footwork</option>
                <option value="Forti">Forti</option>
                <option value="Gilby">Gilby</option>
                <option value="Gordini">Gordini</option>
                <option value="Gunston">Gunston</option>
                <option value="Haas">Haas</option>
                <option value="Hesketh">Hesketh</option>
                <option value="Hill">Hill</option>
                <option value="Hispania">Hispania</option>
                <option value="HRT">HRT</option>
                <option value="Jaguar">Jaguar</option>
                <option value="Jaguar Racing">Jaguar Racing</option>
                <option value="Joest Racing">Joest Racing</option>
                <option value="Jordan">Jordan</option>
                <option value="Kauhsen">Kauhsen</option>
                <option value="Kojima">Kojima</option>
                <option value="Kraco">Kraco</option>
                <option value="LEC">LEC</option>
                <option value="Leyton House">Leyton House</option>
                <option value="Ligier">Ligier</option>
                <option value="Lola">Lola</option>
                <option value="Lotus">Lotus</option>
                <option value="March">March</option>
                <option value="Marussia">Marussia</option>
                <option value="Matra">Matra</option>
                <option value="McGuire">McGuire</option>
                <option value="McLaren">McLaren</option>
                <option value="Mercedes">Mercedes</option>
                <option value="Merzario">Merzario</option>
                <option value="Minardi">Minardi</option>
                <option value="Modena">Modena</option>
                <option value="Onyx">Onyx</option>
                <option value="Osella">Osella</option>
                <option value="Pacific">Pacific</option>
                <option value="Penske">Penske</option>
                <option value="Peugeot">Peugeot</option>
                <option value="Porsche">Porsche</option>
                <option value="Prost">Prost</option>
                <option value="RAM">RAM</option>
                <option value="Racing Point">Racing Point</option>
                <option value="Rahal-Hogan">Rahal-Hogan</option>
                <option value="Rial">Rial</option>
                <option value="Sauber">Sauber</option>
                <option value="Scuderia Centro Sud">Scuderia Centro Sud</option>
                <option value="Scuderia Ferrari">Scuderia Ferrari</option>
                <option value="Scuderia Finotto">Scuderia Finotto</option>
                <option value="Scuderia Ugolini">Scuderia Ugolini</option>
                <option value="Shadow">Shadow</option>
                <option value="Shannon">Shannon</option>
                <option value="Simtek">Simtek</option>
                <option value="Spirit">Spirit</option>
                <option value="Spyker">Spyker</option>
                <option value="Stebro">Stebro</option>
                <option value="Stewart">Stewart</option>
                <option value="Super Aguri">Super Aguri</option>
                <option value="Surtees">Surtees</option>
                <option value="Talbot-Lago">Talbot-Lago</option>
                <option value="Tecno">Tecno</option>
                <option value="Theodore">Theodore</option>
                <option value="Toleman">Toleman</option>
                <option value="Toro Rosso">Toro Rosso</option>
                <option value="Truesports">Truesports</option>
                <option value="Tyrrell">Tyrrell</option>
                <option value="UDT Laystall">UDT Laystall</option>
                <option value="Vanwall">Vanwall</option>
                <option value="Virgin">Virgin</option>
                <option value="Watson">Watson</option>
                <option value="Williams">Williams</option>
                <option value="Wolf">Wolf</option>
                <option value="Zakspeed">Zakspeed</option>
              </select>
            </label>
            {errors.teams && (
              <span className={style.errorTeams}>{errors.teams}</span>
            )}

            <br />
            <label>
              Date Of Birth:
              <input
                type="text"
                id="dob"
                name="dob"
                value={driverCreated.dob}
                onChange={handleChange}
                placeholder="YYYY/MM/DD"
                className={style.inputDob}
              />
            </label>
            {errors.dob && <span className={style.errorDob}>{errors.dob}</span>}

            <br />

            <label>
              Image:
              <input
                type="text"
                id="image"
                name="image"
                value={driverCreated.image}
                onChange={handleChange}
                className={style.inputImage}
              />
            </label>
            {errors.image && (
              <span className={style.errorImage}>{errors.image}</span>
            )}

            <br />

            <label>
              Description:
              <input
                type="text"
                id="description"
                name="description"
                value={driverCreated.description}
                onChange={handleChange}
                placeholder="Ingrese una descripcion..."
                className={style.inputDescription}
              />
            </label>
            {errors.description && (
              <span className={style.errorDescription}>
                {errors.description}
              </span>
            )}

            <br />
            <button type="submit" className={style.btn}>
              {" "}
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
