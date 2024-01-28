import FotoMia from "../../assets/images/FotoMia.png";
import style from "./About.module.css";

const About = () => {
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <img src={FotoMia} alt="Maxi" className={style.img} />
      </div>
      <div className={style.infoContainer}>
        <h2 className={style.teams}>
          Teams: <br /> <h2 className={style.teamsText}>McLaren</h2>
        </h2>
        <h2 className={style.id}>Age: 19</h2>
        <h2 className={style.name}>Máximo Varela</h2>
        <hr />
        <h2 className={style.description}>
          Description <br />
          <h2 className={style.descriptionText}>
            Hi! I´m Máximo, a 19 year old enthusiast with a special affinity for
            rock, nu metal, and heavy metal. My fascination with technology
            interwines with my love for art, creating a space where creativity
            and innovation converge.
          </h2>
        </h2>
        <hr />
        <h2 className={style.nationality}>
          Nationality: <h2 className={style.nationalityText}>Argentina</h2>
        </h2>
        <h2 className={style.dob}>
          Date Of Birth <br /> <h2 className={style.dobText}>2004/12/06</h2>
        </h2>
      </div>
    </div>
  );
};

export default About;
