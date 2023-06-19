import React, { ChangeEvent, useState, useRef } from "react";
import { bannerImg } from "../assets";
import { foodMealbyName } from "../api/fetchData";
import axios from "axios";
import { useNavigate } from "react-router";

type Props = {};

function Banner({}: Props) {
  const navigate = useNavigate();

  const [foodName, setFoodName] = useState<string>();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`
    );
    setData(response.data.meals);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchData();
    navigate(`/meals/${foodName}`);
    formRef.current.reset();
  };

  const formRef = useRef<any>(null);

  return (
    <section className="relative h-[500px] flex items-center justify-center">
      <img
        src={bannerImg}
        alt=""
        className="absolute h-full w-full object-cover"
      />
      <form className="z-50" ref={formRef} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search..."
          className="search__input"
          onChange={(e) => setFoodName(e.target.value)}
        />
        <button className="search__btn">Send</button>
      </form>
    </section>
  );
}

export default Banner;
