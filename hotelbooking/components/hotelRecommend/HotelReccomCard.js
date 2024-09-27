import Image from "next/image";
import React from "react";

const HotelReccomCard = ({ name, city, picture }) => {
    return (
        <div className="text-[14px]">
            <Image
                src={picture}
                width={0}
                height={0}
                sizes="100vw"
                className="sm:w-full sm:h-[123px] h-[200px] w-11/12 object-cover"
                alt="hotel picture"
            />
            <p className="pt-2">
                Trip to {city} at {name}
            </p>
        </div>
    );
};

export default HotelReccomCard;
