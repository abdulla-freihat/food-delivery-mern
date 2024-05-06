import React from "react";
import Hero from "./Hero";
import ExploreMenu from "./ExploreMenu";
import TopDishes from "./TopDishes";
import { useState } from "react";

const Home = () => {

  const [category , setCategory] = useState('All');


  return (
    <>
      <Hero />
      <ExploreMenu  category ={category} setCategory ={setCategory}/>
      <TopDishes />
    </>
  );
};

export default Home;
