import React from 'react';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import DishCard from './DishCard';
import { swiggy_api_URL } from "../constants";
import SearchBar from './SearchBar';
import search from '../assets/images/search.png';
import restaurantList from '../restaurantList';
import Shimmer from './Shimmer';

const button = document.getElementById("search-button");



// Filter the restaurant data according input type
function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}




const Body = () => {
  const [searchText, setSearchText] = useState("");
  // const [allRestaurants, setAllRestaurants] = useState([...restaurantList]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  // const [filteredRestaurants, setFilteredRestaurants] = useState([...restaurantList]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // use useEffect for one time call getRestaurants using empty dependency array
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const data = await fetch(swiggy_api_URL);
      const json = await data.json();
      // updated state variable restaurants with Swiggy API data
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      console.log("fetched from api");
    } catch (error) {
      console.log(error);
    }
  }
  
  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setFilteredRestaurants(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage("No matches found");
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  // if allRestaurants is empty don't render restaurants cards
  if (!allRestaurants) return null;

  return (
    <div className='mt-32'>
    
      {/* <SearchBar /> */}
      <div className="searchBar flex items-center ml-20 mt-6">
      <input
        type="text"
        placeholder="Search"
        className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none "
        onChange={(e) => setSearchText(e.target.value)}
        onKeyUp={function enter(e){
          if (e.key === 'Enter') {
          button.click(); // Simulate button click event
        }}}
      />
      <button
        id="search-button"
        type="button"
        className="bg-green-500 hover:bg-green-700 text-white px-3 py-2 rounded-r-md h-10"
        onClick={() => {
          // user click on button searchData function is called
          searchData(searchText, allRestaurants);
        }}
      >
        <img src={search} alt="" className='w-6 h-6' />
      </button>
      {errorMessage && <div className="error-container mx-4">{errorMessage}</div>}
      </div>


      {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : ( <div className="wrapper flex flex-wrap gap-6 justify-start mx-20 my-4">
     {filteredRestaurants.map((restaurant) => {
        return (
          <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
        <DishCard key={restaurant.data.id} {...restaurant.data} />
        </Link>
        );
      })}
     </div>)}
    
    </div>
  )
}

export default Body
