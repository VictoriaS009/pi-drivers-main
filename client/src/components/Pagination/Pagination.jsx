import React from "react";
import style from "./Pagination.module.css";

const Pagination = ({
  cardsPerPage,
  totalCards,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const maxPagesToShow = 5;

  const getPageNumbers = () => {
    if (totalPages <= maxPagesToShow) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    } else {
      const pages = [];
      const midPoint = Math.ceil(maxPagesToShow / 2);

      if (currentPage <= midPoint) {
        // Display pages from 1 to maxPagesToShow
        for (let i = 1; i <= maxPagesToShow; i++) {
          pages.push(i);
        }
      } else if (currentPage >= totalPages - midPoint) {
        // Display pages from totalPages - maxPagesToShow + 1 to totalPages
        for (let i = totalPages - maxPagesToShow + 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Display pages around the current page
        const start = currentPage - Math.floor(maxPagesToShow / 2);
        const end = currentPage + Math.floor(maxPagesToShow / 2);

        for (let i = start; i <= end; i++) {
          pages.push(i);
        }
      }

      return pages;
    }
  };

  return (
    <div className={style.container}>
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className={`${style.btn} ${currentPage === 1 ? style.selected : ""}`}
      >
        {"<<"}
      </button>

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${style.btn} ${currentPage === 1 ? style.selected : ""}`}
      >
        {"<"}
      </button>

      {getPageNumbers().map((page, index) => (
        <React.Fragment key={index}>
          {index > 0 && page !== getPageNumbers()[index - 1] + 1 && (
            <span>...</span>
          )}

          <button
            onClick={() => onPageChange(page)}
            disabled={currentPage === page}
            className={`${style.btn} ${
              currentPage === page ? style.selected : ""
            }`}
          >
            {page}
          </button>
        </React.Fragment>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${style.btn} ${
          currentPage === totalPages ? style.selected : ""
        }`}
      >
        {">"}
      </button>

      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className={`${style.btn} ${
          currentPage === totalPages ? style.selected : ""
        }`}
      >
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;
