import React from "react";
import RandomMeal from "../components/RandomMeal";
import CategoriesOfFood from "../components/CategoriesOfFood";
import PopularFood from "../components/PopularFood";
import { motion } from "framer-motion";
import { useLocation } from "react-router";

type Props = {};

function Home({}: Props) {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section className="">
        <RandomMeal />
        {/* <FoodCategories /> */}
        <CategoriesOfFood />
        <PopularFood />
      </section>
    </motion.div>
  );
}

export default Home;
