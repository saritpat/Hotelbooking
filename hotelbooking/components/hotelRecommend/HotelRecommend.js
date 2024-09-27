import React from "react";
import HotelReccomCard from "./HotelReccomCard";

const HotelRecommend = ({ hotels }) => {
    return (
        <div className="text-[18px] font-medium sm:p-4 px-6">
            Reccommended
            <div className="mt-2 sm:grid sm:grid-cols-1 sm:gap-y-[32px] flex sm:overflow-x-auto overflow-x-scroll hide-scrollbar">
                {hotels.map((hotel) => (
                    <div key={hotel.id} className="sm:w-full w-4/5 sm:block flex-shrink-0">
                        <HotelReccomCard
                            name={hotel.hotel_name}
                            city={hotel.city}
                            picture={hotel.picture}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HotelRecommend;
