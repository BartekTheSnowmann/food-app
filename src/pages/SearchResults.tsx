import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { foodMealbyName } from "../api/fetchData";
import axios from "axios";
import SingleItem from "../components/SingleItem";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

type Props = {};

function SearchResults({}: Props) {
  const { name } = useParams();
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<boolean | null>();
  const [error, setError] = useState<boolean>(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get(foodMealbyName(name));
    setLoading(false);
    setData(response.data.meals);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    setLoading(null);
  }, [name]);

  const navigate = useNavigate();

  return (
    <section className="min-h-[50vh]">
      <div className="max-w-[1240px] mx-auto pb-16 pt-8 px-4">
        {/* Go back */}
        <div className="flex cursor-pointer mb-4" onClick={() => navigate("/")}>
          <ChevronLeftIcon className="h-6 w-6 " />
          <h1>Go back</h1>
        </div>
        {/* Information about resutls */}
        {data && loading === false ? (
          <div className="mb-8">
            <h1 className="text-3xl md:text-center">
              {data.length} Results for '{name}'
            </h1>
            <div className="divider"></div>
          </div>
        ) : (
          !data &&
          loading === false && (
            <div className="mb-8">
              <h1 className="text-3xl md:text-center">
                No results for '{name}'
              </h1>
            </div>
          )
        )}

        {/*  */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
          {data && data.length > 0
            ? data.map((item: any, index: number) => (
                <SingleItem key={item.idMeal} item={item} index={index} />
              ))
            : ""}
        </div>
      </div>
    </section>
  );
}

export default SearchResults;
