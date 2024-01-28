import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getDrivers,
  filterCards,
  orderCardsByName,
  orderCardsByDob,
} from "../../redux/action/actions";
import Cards from "../../components/Cards/Cards";
import style from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();
  const drivers = useSelector((state) => state.drivers);

  useEffect(() => {
    // Llamar a getDrivers solo al cargar la página
    dispatch(getDrivers());
  }, []);

  const resetDrivers = async () => {
    dispatch(getDrivers());
  };

  const handleFilter = (event) => {
    const selectedValue = event.target.value;
    dispatch(filterCards(selectedValue));
  };

  const handleOrderByName = (event) => {
    dispatch(orderCardsByName(event.target.value));
  };

  const handleOrderByDob = (event) => {
    dispatch(orderCardsByDob(event.target.value));
  };

  return (
    <div className={style.container}>
      <div className={style.slctContainer}>
        <select
          onChange={handleFilter}
          defaultValue={"All"}
          className={style.slct}
        >
          <option value="All">All</option>
          <option value="API">Api</option>
          <option value="DATABASE">Database</option>
        </select>

        <select
          onChange={handleOrderByName}
          defaultValue={"OrderByName"}
          className={style.slct}
        >
          <option value="OrderByName" disabled="disabled">
            Order By Name
          </option>
          <option value="ASC">Ascendente</option>
          <option value="DES">Descendente</option>
        </select>

        <select
          onChange={handleOrderByDob}
          defaultValue={"OrderByDob"}
          className={style.slct}
        >
          <option value="OrderByDob" disabled="disabled">
            Order By Dob
          </option>
          <option value="ASC">Ascendente</option>
          <option value="DES">Descendente</option>
        </select>

        <button onClick={resetDrivers} className={style.btn}>
          All Drivers
        </button>
      </div>

      <Cards drivers={drivers} />
    </div>
  );
};

export default Home;
