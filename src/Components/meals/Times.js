import React from "react";
import { Link } from "react-router-dom";
import { times } from "./data";
const Times = () => {
  return (
    <div className="m-auto mt-3 text-center ">
      {times.map((items) => {
        return (
          <button className="btn m-2 shadow">
            <Link
              className="text-light text-decoration-none mt-5 "
              to={items.link}
            >
              {items.name} <span className="fs-5">
                 {items.icon}
                </span>
            </Link>
          </button>
        );
      })}
    </div>
  );
};

export default Times;
