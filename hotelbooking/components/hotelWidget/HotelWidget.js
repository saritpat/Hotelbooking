import React from "react";
import WidgetCard from "./WidgetCard";

const HotelWidget = ({ hotels, searchParam }) => {
    return (
        <div className="sm:mt-4 sm:grid sm:grid-cols-3 flex flex-col gap-x-5 gap-y-10">
            {hotels.map((hotel) => (
                <div key={hotel.id}>
                    <WidgetCard
                        id={hotel.id}
                        name={hotel.hotel_name}
                        city={hotel.city}
                        price={hotel.room_rate}
                        picture={hotel.picture}
                        searchParam={searchParam}
                    />
                </div>
            ))}
        </div>
    );
};

export default HotelWidget;
