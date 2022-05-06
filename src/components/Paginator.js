import React from "react";

const Paginator = ({ paginationData, onHandlePrevPage, onHandleNextPage }) => {
  return (
    <div className="text-center p-4">
      {paginationData.prevPage && (
          <span>
            <span className="text-black"> ... </span>{" "}
          </span>
        ) && (
          <span
            className="text-blue-500 underline-offset-auto"
            onClick={onHandlePrevPage}
          >
            <i className="arrow left"></i> ... {paginationData.prevPage}
          </span>
        )}
      <span className="m-1">{paginationData.currentPage}</span>
      {paginationData.nextPage && (
        <>
          <span
            className="text-blue-500 underline-offset-auto"
            onClick={onHandleNextPage}
          >
            {paginationData.nextPage} <span className="text-black"> ... </span>{" "}
            <i className="arrow right"></i>
          </span>
        </>
      )}
    </div>
  );
};

export default Paginator;
