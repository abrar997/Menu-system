import React from "react";
import { Link } from "react-router-dom";

const AllMeals = () => {
  return (
    <div>

      <h3> All Meals</h3>
      <Link to="/add">
        <button className="btn">Add Meal</button>
      </Link>
    </div>
  );
};

export default AllMeals;
