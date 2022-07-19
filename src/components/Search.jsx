// @ts-check
import React from "react";
import { AiOutlineFileSearch } from 'react-icons/ai';

const Search = ({ search, searchChange }) => {
  return (
    <div>
      <label htmlFor="search" className="block text-sm font-medium text-gray-700">
        Search
      </label>
      <div className="mt-1 relative flex items-center">
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={searchChange}
          aria-autocomplete="none"
          autoComplete="off"
          className="shadow-sm focus:ring-purple-800 focus:border-purple-800 block w-full pr-12 sm:text-sm border-gray-300 rounded-md"
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd className="inline-flex items-center border border-gray-200 rounded px-2 text-sm font-sans font-medium text-gray-400">
            <AiOutlineFileSearch />
          </kbd>
        </div>
      </div>
    </div>
  );
};

export default Search;