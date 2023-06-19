import axios from "axios";
import React, { useState, useEffect } from "react";
import { foodRandom } from "../api/fetchData";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

type Props = {};

function RandomMeal({}: Props) {
  const navigate = useNavigate();
  const [data, setData] = useState<any>();

  const fetchData = async () => {
    const response = await axios.get(foodRandom);
    setData(response.data.meals);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigateToFood = (id: number) => {
    navigate(`/meal/${id}`);
  };

  const headingVariant = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section className="px-4 py-16 max-w-[1240px] min-h-[50vh] mx-auto flex flex-col md:flex-row gap-12 justify-between">
      <div className="flex-1">
        <div>
          <h1 className="text-3xl md:text-5xl">Todays Special</h1>
          <div className="divider"></div>
        </div>
        <div>
          {data &&
            data.map((item: any) => (
              <div
                key={item.idMeal}
                className="flex flex-col items-start gap-4"
              >
                <h1 className="text-xl md:text-3xl md:mt-40 mt-12">
                  {item.strMeal}
                </h1>
                <div>
                  <p>-{item.strArea} Food-</p>
                </div>
                <button
                  className="recipe__btn"
                  onClick={() => navigateToFood(item.idMeal)}
                >
                  See Recipe
                </button>
              </div>
            ))}
        </div>
      </div>
      <div className="flex-1">
        {data
          ? data.map((item: any) => (
              <div
                key={item.idMeal}
                className="flex flex-col md:flex-row justify-between items-center"
              >
                <div className="flex-1 order-2 relative">
                  <img
                    src={item.strMealThumb}
                    alt="Meal"
                    className="w-full h-full rounded-l-md"
                  />
                  <p className="meal__category absolute top-4 right-0">
                    {item?.strCategory}
                  </p>
                </div>
              </div>
            ))
          : ""}
      </div>
    </section>
  );
}

export default RandomMeal;
