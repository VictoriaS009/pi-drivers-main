import { Link } from "react-router-dom";
import style from "./Card.module.css";
import LogoF1 from "../../assets/images/F1Logo.png";

const Card = ({ driver }) => {
  const { name, teams, image, id } = driver;

  return (
    <Link to={`/detail/${id}`}>
      <div className={style.container}>
        <img src={LogoF1} alt="LogoF1" className={style.logo} />
        <hr className={style.separador} />
        <div className={style.imgContainer}>
          <img src={image.url} alt="driver" className={style.img} />
        </div>
        <hr className={style.separador} />
        <div className={style.textContainer}>
          <h2 className={style.name}>
            Name: <br /> {` ${name.forename} ${name.surname}`}
          </h2>
          <h3 className={style.teams}>
            Teams: <br /> {` ${teams}`}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
