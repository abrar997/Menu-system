import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import './App.css'
import AddMeal from "./Components/AllMeals/AddMeal";
const App = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="add"  element={<AddMeal />} />
      </Routes>
    </div>
  );
};

export default App;
