import { InformationCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

type Props = {
  item: {
    strMealThumb: string;
    strMeal: string;
    idMeal: number;
  };
  index?: number | any;
};

function SingleItem({ item, index }: Props) {
  const navigate = useNavigate();
  const navigateToFood = (id: number) => {
    navigate(`/meal/${id}`);
  };

  return (
    <motion.div
      className="shadow-md p-2 bg-white cursor-pointer flex flex-col justify-between gap-4"
      key={`item-${index}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
    >
      <img src={item.strMealThumb} alt="Meal" />
      <h1>{item.strMeal}</h1>
      <button
        className="recipe__btn flex justify-center items-center gap-x-2"
        onClick={() => navigateToFood(item.idMeal)}
      >
        Recipe
        <InformationCircleIcon className="h-6 w-6" />
      </button>
    </motion.div>
  );
}

export default SingleItem;
