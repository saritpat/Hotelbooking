import React from "react";
import HotelCard from "./HotelCard";

const HotelList = ({ data, location, checkIn, checkOut, room }) => {
    return (
        <div className="text-[20px] font-medium">
            Recent Searches
            <div className="mt-2 sm:grid sm:grid-cols-1 sm:gap-y-8 gap-x-3 flex sm:overflow-clip overflow-x-scroll hide-scrollbar">
                {data.map((item) => (
                    <div
                        key={item.id}
                        className="sm:w-full w-3/5 flex-shrink-0"
                    >
                        <HotelCard
                            id={item.id}
                            name={item.hotel_name}
                            picture={item.picture}
                            rating={item.rating}
                            roomRate={item.room_rate}
                            location={location}
                            checkIn={checkIn}
                            checkOut={checkOut}
                            room={room}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HotelList;
