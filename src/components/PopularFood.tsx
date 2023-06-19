import axios from "axios";
import React, { useEffect, useState } from "react";
import { foodIngredients, foodByIngredient } from "../api/fetchData";
import { useNavigate } from "react-router";
import { noImage } from "../assets";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

function PopularFood({}: Props) {
  const [currentIngredient, setCurrentIngredient] = useState<string>();
  const [foodIngredientsData, setFoodIngredientsData] = useState<any>();
  const [currentMeal, setCurrentMeal] = useState<any>([
    {
      id: 0,
      title: "",
      image: "",
    },
  ]);

  const fetchFoodIngredients = async () => {
    const response = await axios.get(foodIngredients);
    const foodIngredientsData = response.data.meals;
    takeRandomIngredients(foodIngredientsData);
  };

  const takeRandomIngredients = (foodIngredientsData: any) => {
    const ingredientsLength = foodIngredientsData.length - 1;
    const arrayOfIndexes = [
      Math.floor(Math.random() * ingredientsLength),
      Math.floor(Math.random() * ingredientsLength),
      Math.floor(Math.random() * ingredientsLength),
      Math.floor(Math.random() * ingredientsLength),
    ];
    let ingredientsArray: string[] = [];
    foodIngredientsData.map((ingredient: any, index: number) => {
      if (arrayOfIndexes.includes(index)) {
        ingredientsArray.push(ingredient.strIngredient);
      }
    });
    setFoodIngredientsData(ingredientsArray);
    fetchMealsByIngredient(ingredientsArray);
  };

  const fetchMealsByIngredient = async (data: string[], item?: string) => {
    if (!item) {
      let SomeIndex: number = 0;
      let SomeIngredient = data[SomeIndex];
      setCurrentIngredient(SomeIngredient);
      const response = await axios.get(foodByIngredient(SomeIngredient));
      if (response.data.meals == null || undefined) {
        setCurrentMeal({ image: noImage });
      } else {
        setCurrentMeal({
          id: response.data.meals[0].idMeal,
          image: response.data.meals[0].strMealThumb,
          title: response.data.meals[0].strMeal,
        });
      }
    } else {
      setCurrentIngredient(item);
      const response = await axios.get(foodByIngredient(item));
      if (response.data.meals == null || undefined) {
        setCurrentMeal({ image: noImage });
      } else {
        setCurrentMeal({
          id: response.data.meals[0].idMeal,
          image: response.data.meals[0].strMealThumb,
          title: response.data.meals[0].strMeal,
        });
      }
    }
  };

  useEffect(() => {
    fetchFoodIngredients();
  }, []);

  const navigate = useNavigate();
  const navigateToFood = (id: number) => {
    navigate(`/meal/${id}`);
  };

  return (
    <section className="max-w-[1240px] mx-auto px-4 py-16">
      <div className="flex flex-col md:items-center mb-8">
        <h1 className="text-3xl md:text-5xl mb-3 md:text-center">
          Popular Ingredients
        </h1>
        <p>See what those ingredients can do!</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-8">
        {/* Ingredients */}
        <div className="flex-1 flex flex-wrap">
          <div className="flex flex-col justify-between flex-wrap gap-8">
            <div className="flex md:flex-col gap-4 flex-wrap">
              {foodIngredientsData &&
                foodIngredientsData.map((item: any) => (
                  <motion.div
                    viewport={{ once: true }}
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    key={item}
                    className={`${
                      currentIngredient === item
                        ? "bg-primary-300 text-white"
                        : "hover:bg-primary hover:text-white"
                    } md:w-60 w-32 h-20 shadow-md p-4 cursor-pointer relative mr-[20px]`}
                    onClick={() =>
                      fetchMealsByIngredient(foodIngredientsData, item)
                    }
                  >
                    <div
                      className={`${
                        currentIngredient === item ? "triangle-colored" : ""
                      } triangle absolute bottom-0 md:top-[30px] -right-[20px] `}
                    ></div>
                    <h1 className="text-sm md:text-lg">{item}</h1>
                  </motion.div>
                ))}
            </div>
            <div>
              {currentMeal.id ? (
                <>
                  <h1 className="text-xl md:text-3xl">{currentMeal?.title}</h1>
                  <button
                    className="recipe__btn mt-4"
                    onClick={() => navigateToFood(currentMeal?.id)}
                  >
                    See recipe
                  </button>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
        {/* Meals */}
        <div className="flex-1">
          <AnimatePresence>
            {currentMeal && (
              <img
                src={currentMeal?.image}
                alt="Meal image"
                className="transition-all duration-300 w-full h-full"
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default PopularFood;
