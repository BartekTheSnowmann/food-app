import React, { useState, useEffect } from "react";
import { foodCategories } from "../api/fetchData";
import axios from "axios";
import { useNavigate } from "react-router";
import { HeartIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type Props = {};

function CategoriesOfFood({}: Props) {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(foodCategories);
    setData(response.data.categories);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();
  const navigateToFood = (category: string) => {
    navigate(`/category/${category}`);
  };

  const FoodCategories = data.map((item: any) => (
    <div
      key={item.idCategory}
      className="item__category group"
      onClick={() => navigateToFood(item.strCategory)}
    >
      <img src={item.strCategoryThumb} alt="Meal" className="h-full w-full" />
      <h1 className="category__btn">{item.strCategory}</h1>
    </div>
  ));

  const responsive: any = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="py-16 px-4 bg-tertiary">
      <div className="flex flex-col mx-auto">
        <div className="text-white mb-16 flex flex-col gap-2 items-center">
          <h1 className="text-2xl sm:text-3xl">Many Different Categories</h1>
          <p className="flex items-center md:justify-center gap-x-2">
            Chose your favorite one
            <HeartIcon className="h-8 w-8 text-red-400" />
          </p>
        </div>
        <div>
          <Carousel
            autoPlay={true}
            autoPlaySpeed={3000}
            infinite={true}
            showDots={false}
            transitionDuration={300}
            responsive={responsive}
          >
            {FoodCategories}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default CategoriesOfFood;
