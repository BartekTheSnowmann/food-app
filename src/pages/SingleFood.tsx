import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { foodById } from "../api/fetchData";
import axios from "axios";
import {
  StopIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Props = {};

function SingleFood({}: Props) {
  const { id } = useParams();

  const [data, setData] = useState<any>([]);
  const fetchData = async () => {
    const response = await axios.get(foodById(id));
    setData(response.data.meals);
  };
  useEffect(() => {
    fetchData();
  }, []);

  let count = 1;
  let myMeal = data[0];
  let ingredients = [];
  for (let i in myMeal) {
    let ingredient = "";
    let measure = "";
    if (i.startsWith("strIngredient") && myMeal[i]) {
      ingredient = myMeal[i];
      measure = myMeal["strMeasure" + count];
      count += 1;
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  const [instruction, setInstruction] = useState(myMeal?.strInstructions);
  useEffect(() => {
    let slicedInstruction = myMeal?.strInstructions.slice(0, 100);
    setInstruction(slicedInstruction);
  }, [data]);

  const readMore = () => {
    if (instruction.length <= 100) {
      let slicedInstruction = myMeal?.strInstructions;
      setInstruction(slicedInstruction);
    } else {
      let slicedInstruction = myMeal?.strInstructions.slice(0, 100);
      setInstruction(slicedInstruction);
    }
  };

  const navigate = useNavigate();

  return (
    <section>
      <div className="max-w-[1240px] mx-auto py-8">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <ChevronLeftIcon className="h-6 w-6 " />
          <h1>Go back</h1>
        </div>

        <div className="py-8">
          {data &&
            data.map((item: any) => (
              <div
                key={item.idMeal}
                className="flex flex-col md:flex-row justify-between gap-4"
              >
                <div className="flex-1">
                  <h1 className="text-3xl mb-4">{item.strMeal}</h1>
                  <p>
                    {instruction}
                    <span
                      className="text-blue-700 flex items-center cursor-pointer"
                      onClick={() => readMore()}
                    >
                      {" "}
                      read more
                      <ChevronDownIcon className="w-6 h-6" />
                    </span>
                  </p>
                </div>
                <div className="flex-1">
                  <img src={item.strMealThumb} alt="food image" className="" />
                </div>
              </div>
            ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {ingredients.map((item: any) => (
            <p key={item} className="flex gap-x-2">
              <StopIcon className="h-6 w-6" />
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SingleFood;
