import React from "react";

const SearchBar = () => {
    return (
        <div className="w-full">
            <input
                className="w-full h-[56px] bg-[#EBEDFF] rounded-md px-5 focus:ring-1 focus:outline-none focus:ring-primary"
                placeholder="Search city , Country, Place for Travel advisory"
            />
        </div>
    );
};

export default SearchBar;
