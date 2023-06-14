import React from 'react';



const DishCard = ({ cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating, 
    slaString}) => {
  return (
    // <div className="w-80 bg-white shadow-lg rounded-lg overflow-hidden my-5 border border-gray-200 p-4 transition hover:border-gray-500">
    //   <img className="h-48 w-full object-cover" src={
    //       "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
    //       cloudinaryImageId
    //     } alt={name} />
    //   <div className="p-4">
    //     <h3 className="text-lg font-medium text-gray-900 h-10 mb-3">{name}</h3>
    //     <p className="text-gray-700 mt-2 h-10 mb-1">{cuisines.join(", ")}</p>
    //     <div className="flex justify-between items-center mt-4">
    //       <span className="text-gray-900 font-bold">{costForTwoString}</span>
    //       <button className="bg-slate-300 hover:bg-green-500 text-black font-bold py-2 px-4 rounded">+</button>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-white rounded-lg shadow-lg p-4 w-80 border border-gray-200 transition hover:border-gray-500 cursor-pointer">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} 
      alt="Restaurant" className="w-full h-48 object-cover rounded-lg mb-4" />
      <h2 className="text-lg font-semibold mb-3 h-10">{name}</h2>
      <p className="text-gray-600 mb-3 h-10 ">{cuisines.join(", ")}</p>
      <div className="flex items-center mb-2">
        <div className="bg-green-500 text-white flex items-center gap-1" style={
            avgRating < 4
              ? { backgroundColor: "#ff726f" }
              : avgRating === "--"
              ? { backgroundColor: "#7CB9E8", color: "black" }
              : { color: "white" }
          }>
          <svg className="pl-1"xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#ffffff" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          <div className="text-white-500 text-xs pr-1">
        
          {avgRating}
          </div>
        </div>
      </div>
      <div className="flex items-center">
      
        <span className="text-gray-600 text-xs">{slaString}</span>
        <span className="mx-2 text-gray-400">•</span>
        <span className="text-gray-600 text-xs">{costForTwoString}</span>
      </div>
    </div>
  );
};

export default DishCard;
