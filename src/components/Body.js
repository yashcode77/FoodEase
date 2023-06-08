import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DishCard from './DishCard';
import { swiggy_api_URL } from "../constants";
import SearchBar from './SearchBar';

// async function getRestaurant to fetch Swiggy API data


const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);


  return (
    <>
    
      <SearchBar />
     <div className="wrapper flex flex-wrap gap-6 justify-between mx-20 my-4">
      <DishCard />
      <DishCard />
      <DishCard />
      <DishCard />
     </div>
    </>
  )
}

export default Body
