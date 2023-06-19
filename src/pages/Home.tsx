import React from "react";
import RandomMeal from "../components/RandomMeal";
import CategoriesOfFood from "../components/CategoriesOfFood";
import PopularFood from "../components/PopularFood";

type Props = {};

function Home({}: Props) {
  return (
    <section className="">
      <RandomMeal />
      {/* <FoodCategories /> */}
      <CategoriesOfFood />

      <PopularFood />
    </section>
  );
}

export default Home;
