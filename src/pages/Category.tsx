import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { foodByCategory } from "../api/fetchData";
import SingleItem from "../components/SingleItem";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type Props = {};

function Category({}: Props) {
  const { category } = useParams();

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(foodByCategory(category));
    setData(response.data.meals);
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  const location = useLocation();

  const navigate = useNavigate();

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <section>
        <div className="max-w-[1240px] mx-auto pt-8 pb-16 px-4">
          {/* Go back */}
          <div
            className="flex items-center cursor-pointer mb-4"
            onClick={() => navigate(-1)}
          >
            <ChevronLeftIcon className="h-6 w-6 " />
            <h1>Go back</h1>
          </div>
          <div className="mb-8">
            <h1 className="text-3xl ">{category}</h1>
            <div className="divider "></div>
          </div>
          <div className="relative ">
            {data ? (
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
                {data.map((item: any, index: number) => (
                  <SingleItem
                    key={`category-${index}`}
                    item={item}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              "Wait a minute"
            )}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Category;
