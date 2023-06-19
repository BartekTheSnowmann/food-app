import { InformationCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useNavigate } from "react-router";

type Props = {
  item: any;
};

function SingleItem({ item }: Props) {
  const navigate = useNavigate();
  const navigateToFood = (id: number) => {
    navigate(`/meal/${id}`);
  };

  return (
    <div className="shadow-md p-2 bg-white cursor-pointer flex flex-col justify-between gap-4">
      <img src={item.strMealThumb} alt="Meal" />
      <h1>{item.strMeal}</h1>
      <button
        className="recipe__btn flex justify-center items-center gap-x-2"
        onClick={() => navigateToFood(item.idMeal)}
      >
        Recipe
        <InformationCircleIcon className="h-6 w-6" />
      </button>
    </div>
  );
}

export default SingleItem;
