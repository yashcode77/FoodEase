import React from 'react'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OfferCard from './OfferCard'
import OffersList from './OffersList';
import Shimmer from './Shimmer';

const Offers = () => {
  const [allRestaurants, setAllRestaurants] = useState([...OffersList]);
  return (
    <div className=''>
      <h1 className='mt-32 ml-36 text-2xl font-bold'>Restaurants with great offers near me</h1>
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : ( <div className="wrapper flex flex-wrap gap-6 justify-start mx-32 my-16">
     {allRestaurants.map((restaurant) => {
        return (
          <div>
            
            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
        <OfferCard key={restaurant.data.id} {...restaurant.data} />
        </Link>
          </div>
          
        );
      })}
     </div>)}
    </div>
  )
}

export default Offers
