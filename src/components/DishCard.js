import React from 'react';



const DishCard = ({ cloudinaryImageId,
    name,
    cuisines,
    area,
    lastMileTravelString,
    costForTwoString,
    avgRating, }) => {
  return (
    <div className="w-80 bg-white shadow-lg rounded-lg overflow-hidden my-5 border border-gray-200 p-4 transition hover:border-gray-500">
      <img className="h-48 w-full object-cover" src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        } alt={name} />
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <p className="text-gray-700 mt-2">{cuisines.join(", ")}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-900 font-bold">{costForTwoString}</span>
          <button className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">+</button>
        </div>
      </div>
    </div>
  );
};

export default DishCard;
