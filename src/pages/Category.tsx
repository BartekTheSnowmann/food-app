import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { foodByCategory } from "../api/fetchData";
import SingleItem from "../components/SingleItem";

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

  return (
    <section className="min-h-[50vh]">
      <div className="max-w-[1240px] mx-auto pt-8 pb-16 px-4">
        <div className="mb-8">
          <h1 className="text-3xl">{category}</h1>
        </div>
        <div className="relative ">
          {data ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
              {data.map((item: any) => (
                <SingleItem item={item} />
              ))}
            </div>
          ) : (
            "Wait a minute"
          )}
        </div>
      </div>
    </section>
  );
}

export default Category;
