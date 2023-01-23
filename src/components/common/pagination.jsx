import { useState } from "react";

const Pagination = ({ handlePagination, page }) => {
  const [toggle, setToggle] = useState(false);
  const pageList = [20, 30, 40];

  const handleClick = (val) => {
    handlePagination(val);
    setToggle(!toggle);
  };
  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex w-15 justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          id="menu-button"
          data-testid="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setToggle(!toggle)}
        >
          {page}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {toggle && (
        <div
          className="absolute mb-1 z-10 mt-2 w-18 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          {/* <div className="py-1 w-15" role="none"> */}
          {pageList.map((val) => (
            <div key={val} className="py-1 w-15" role="none">
              <span
                className="text-gray-700 px-8 py-2 rounded-md text-sm hover:bg-blue-500 hover:text-white"
                role="menuitem"
                tabIndex="-1"
                id={`menu-item-${val}`}
                onClick={() => handleClick(val)}
              >
                {val}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Pagination;
