import React from 'react';
import search from '../assets/images/search.png';
import { useState } from 'react';

const SearchBar = () => {
    const [searchText,setSearchText] = useState('');
  return (
    <div className="flex items-center ml-20 mt-6">
      <input
        type="text"
        placeholder="Search"
        className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none "
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button
        type="button"
        className="bg-green-500 hover:bg-green-700 text-white px-3 py-2 rounded-r-md h-10"
      >
        <img src={search} alt="" className='w-6 h-6' />
      </button>
      <h1>{searchText}</h1>
    </div>
  );
};

export default SearchBar;
