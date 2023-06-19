import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { foodMealbyName } from "../api/fetchData";
import { ChartPieIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import SingleItem from "../components/SingleItem";

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

  return (
    <section className="min-h-[50vh]">
      <div className="max-w-[1240px] mx-auto pb-16 pt-8 px-4">
        {/* Information about resutls */}
        {data && loading === false ? (
          <div className="mb-8">
            <h1 className="text-3xl">
              {data.length} Results for '{name}'
            </h1>
          </div>
        ) : (
          !data &&
          loading === false && (
            <div className="mb-8">
              <h1 className="text-3xl">No results for '{name}'</h1>
            </div>
          )
        )}

        {/*  */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
          {data && data.length > 0
            ? data.map((item: any) => (
                <SingleItem key={item.idMeal} item={item} />
              ))
            : ""}
        </div>
      </div>
    </section>
  );
}

export default SearchResults;
