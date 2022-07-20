import React from "react";
import { Container } from "reactstrap";
import AllMeals from "../AllMeals/AllMeals";
import Header from "../Header/Header";
import Meals from "../meals/Meals";

const Home = () => {
  return (
    <Container>
      <Header />
      <Meals />
      <AllMeals />
    </Container>
  );
};

export default Home;
