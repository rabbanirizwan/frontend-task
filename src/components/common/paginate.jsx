import React from "react";

function Paginate({ data, itemsPerPage, handlePageChange, currentPage }) {
  const totalPages = Math.ceil(data?.length / itemsPerPage);

  return (
    <div>
      <div className="flex">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            data-testid={i + 1}
            key={i}
            className={` px-2 py-1 m-1 rounded-md ${
              i + 1 === currentPage ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Paginate;
