import { Link } from "react-router-dom";
import RedImageF1 from "../../assets/images/DriverF1.png";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.column}>
          <h1 className={style.title}>PI DRIVERS</h1>
          <h3 className={style.text}>Welcome To My App!</h3>
          <Link to={"/home"}>
            <button className={style.btn}>START</button>
          </Link>
        </div>
        <div className={style.column}>
          <img src={RedImageF1} alt="F1 image" className={style.image} />
        </div>
      </div>
    </>
  );
};

export default Landing;
