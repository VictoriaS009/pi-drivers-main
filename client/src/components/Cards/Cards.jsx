import { useState } from "react";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import style from "./Cards.module.css";

const Cards = ({ drivers }) => {
  const cardsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentDrivers = drivers?.slice(indexOfFirstCard, indexOfLastCard);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className={style.container}>
        {currentDrivers?.map((driver) => (
          <Card key={driver.id} driver={driver} />
        ))}
      </div>

      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={drivers?.length || 0}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Cards;
