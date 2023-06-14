import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // import useParams for read `resId`
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../constants";
import {MenuShimmer} from "./Shimmer";
import vegicon from "../assets/images/veg-icon.png";
import nonvegicon from "../assets/images/nonveg-icon.png";
import { ShimmerText } from "react-shimmer-effects";



const RestaurantMenu = () => {
  const { resId } = useParams(); // call useParams and get value of restaurant id using object destructuring
  const [restaurant, setRestaurant] = useState(null); // call useState to store the api data in res
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    getRestaurantInfo(); // call getRestaurantInfo function so it fetch api data and set data in restaurant state variable
  }, []);

  async function getRestaurantInfo() {
    try {
      const response = await fetch(swiggy_menu_api_URL + resId);
      const json = await response.json();

      // Set restaurant data
      const restaurantData = json?.data?.cards?.map(x => x.card)?.
                             find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
      setRestaurant(restaurantData);

      // Set menu item data
      const menuItemsData = json?.data?.cards.find(x=> x.groupedCard)?.
                            groupedCard?.cardGroupMap?.REGULAR?.
                            cards?.map(x => x.card?.card)?.
                            filter(x=> x['@type'] == MENU_ITEM_TYPE_KEY)?.
                            map(x=> x.itemCards).flat().map(x=> x.card?.info) || [];
      
      const uniqueMenuItems = [];
      menuItemsData.forEach((item) => {
        if (!uniqueMenuItems.find(x => x.id === item.id)) {
          uniqueMenuItems.push(item);
        }
      })
      setMenuItems(uniqueMenuItems);
    } catch (error) {
      setMenuItems([]);
      setRestaurant(null);
      console.log(error);
    }
  }

  return !restaurant ? (
    <div>
      {Array.from({ length: 10 }, (_, index) => (
        <ShimmerText 
        className="mt-40 mx-56"
        line={5} gap={10} />
      ))}
    </div>
    
    
  ) : (
    <div className="restaurant-menu mx-56 my-32">
  <div className="restaurant-summary flex items-center space-x-4 mb-8">
    <img className="restaurant-img w-16 h-16 rounded-full" src={IMG_CDN_URL + restaurant?.cloudinaryImageId} alt={restaurant?.name} />
    <div className="restaurant-summary-details">
      <h2 className="restaurant-title text-3xl font-bold">{restaurant?.name}</h2>
      <p className="restaurant-tags text-gray-500">{restaurant?.cuisines?.join(", ")}</p>
      <div className="restaurant-details flex items-center space-x-4">
        <div className={`restaurant-rating flex items-center justify-center rounded-full w-8 h-8 ${restaurant?.avgRating < 4 ? 'bg-red-200' : (restaurant?.avgRating === "--" ? 'bg-white text-black' : 'bg-black text-white')}`}>
          <i className="fa-solid fa-star"></i>
          <span>{restaurant?.avgRating}</span>
        </div>
        <div className="restaurant-rating-slash">|</div>
        <div>{restaurant?.sla?.slaString}</div>
        <div className="restaurant-rating-slash">|</div>
        <div>{restaurant?.costForTwoMessage}</div>
      </div>
    </div>
  </div>

  <div className="restaurant-menu-content">
    <div className="menu-items-container">
      <div className="menu-title-wrap flex items-center justify-between">
        <h3 className="menu-title text-lg font-bold">Recommended ({menuItems.length})</h3>
        {/* <p className="menu-count text-gray-500">{menuItems.length} ITEMS</p> */}
      </div>
      <div className="menu-items-list">
        {menuItems.map((item) => (
          <div className="menu-item flex items-center justify-between py-4 border-b border-gray-200" key={item?.id}>
            <div className="menu-item-details">
              {item?.isVeg===1 ? <img src={vegicon} alt="" className="w-5 h-5"/> : <img src={nonvegicon} alt="" className="w-5 h-5"/>}
              {/* <img src={vegicon} alt="" className="w-5 h-5"/> */}
              <h3 className="item-title text-xl font-semibold">{item?.name}</h3>
              <p className="item-cost">{item?.price > 0 ? new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(item?.price / 100) : " "}</p>
              <p className="item-desc text-gray-500 max-w-3xl">{item?.description}</p>
            </div>
            <div className="menu-img-wrapper ml-4">
              {item?.imageId && (
                <img className="menu-item-img w-16 h-16 rounded-md" src={ITEM_IMG_CDN_URL + item?.imageId} alt={item?.name} />
              )}
              <button className="add-btn bg-red-500 text-white px-4 py-2 rounded-full">ADD +</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  );
};

export default RestaurantMenu;
