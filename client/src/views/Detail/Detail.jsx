import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./Detail.module.css";
import Regresar from "../../assets/images/Regresar.png";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/drivers/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <>
      <div>
        <Link to={"/home"}>
          <img src={Regresar} alt="Regresar" className={style.back} />
        </Link>
        {character ? (
          <div className={style.container}>
            <div className={style.imgContainer}>
              <img
                src={character.image?.url}
                alt="imageDriver"
                className={style.img}
              />
            </div>
            <div className={style.infoContainer}>
              <h2 className={style.teams}>
                Teams: <br />{" "}
                <h2 className={style.teamsText}>{character.teams}</h2>
              </h2>
              <h2 className={style.id}>Id: {character.id}</h2>
              <h2 className={style.name}>
                {`${character.name?.forename} ${character.name?.surname}`}
              </h2>
              <hr />
              <h2 className={style.description}>
                Description: <br />
                <h2 className={style.descriptionText}>
                  {character.description}
                </h2>
              </h2>
              <hr />
              <h2 className={style.nationality}>
                Nationality:
                <h2 className={style.nationalityText}>
                  {character.nationality}
                </h2>
              </h2>
              <h2 className={style.dob}>
                Date Of Birth: <br />{" "}
                <h2 className={style.dobText}>{character.dob}</h2>
              </h2>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Detail;
