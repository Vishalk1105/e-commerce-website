import React from "react";

const ReactPagination = ({ nPages, currentPage, setCurrentPage }) => {
  const goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  return (
    <nav>
      <ul className="pagination justify-content-center text-dark">
        <li className="page-item">
          <button className="page-link" onClick={goToPrevPage}>
            Previous
          </button>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${currentPage === pgNumber ? "active" : ""} `}
          >
            <button
              onClick={() => setCurrentPage(pgNumber)}
              className="page-link"
            >
              {pgNumber}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button className="page-link" onClick={goToNextPage}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default ReactPagination;
