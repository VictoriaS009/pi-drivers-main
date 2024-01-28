import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import imageError404 from "../../assets/images/Error404.png";
import style from "./Error404.module.css";

const Error404 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home"), 1000;
    });
  }, []);

  return (
    <div className={style.container}>
      <img src={imageError404} alt="imageError404" className={style.img} />
      <h2>Seras redirigido a home</h2>
    </div>
  );
};

export default Error404;
