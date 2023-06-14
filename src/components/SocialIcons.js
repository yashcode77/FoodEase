import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-teal-500">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <ion-icon name={icon.name}></ion-icon>
          <img src={icon.img} alt="" className="h-5 w-5"/>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;