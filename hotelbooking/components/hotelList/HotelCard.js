import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const HotelCard = ({
    id,
    name,
    picture,
    rating,
    roomRate,
    location,
    checkIn,
    checkOut,
    room,
}) => {
    const router = useRouter();

    const handleOnClick = (e) => {
        e.preventDefault();

        if (!location) {
            alert("Please enter Location");
        } else if (!checkIn) {
            alert("Please enter Check In Date");
        } else if (!checkOut) {
            alert("Please enter Check Out Date");
        } else if (!room) {
            alert("Please enter Guest and room");
        } else {
            const searchParams = new URLSearchParams();
            if (location.trim()) {
                searchParams.append("location", location);
            }
            searchParams.append("checkIn", checkIn);
            searchParams.append("checkOut", checkOut);
            searchParams.append("room", room);

            console.log("searchParams = ", searchParams);
            router.push(`/explore-hotel/${id}?${searchParams.toString()}`);
        }
    };

    return (
        <div className="flex sm:flex-row flex-col sm:rounded rounded-t sm:h-[173px] sm:gap-2 gap-3 border border-[#D1D1D1]">
            <div className="sm:w-1/3">
                <Image
                    src={picture}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="sm:w-full sm:h-full h-[200px] w-full object-cover"
                    alt="hotel picture"
                />
            </div>
            <div className="sm:pl-8 px-3 sm:py-[8px]">
                <div>{name}</div>
                <Image
                    src={"/rating.svg"}
                    width={80}
                    height={12}
                    className="w-auto"
                    alt="rating"
                />
                <div className="flex items-center">
                    <div className="flex my-1 items-center text-white text-[12px] bg-[#FF6969] px-4 py-1 rounded-full mr-4">
                        <Image
                            src={"/white-star.svg"}
                            width={12}
                            height={12}
                            className="pb-1"
                            alt="star"
                        />
                        {rating}
                    </div>
                    <div className="text-[14px] text-[#A8A8A8]">
                        1366 Reviews
                    </div>
                </div>
                <div className="text-[14px] text-[#A8A8A8]">Amenities</div>
                <Image
                    src={"/amenities.svg"}
                    width={200}
                    height={20}
                    className="h-auto"
                    alt="amenities"
                />
                <div className="text-primary font-medium text-base">
                    {roomRate[1]}/night
                </div>
            </div>
            <button
                onClick={handleOnClick}
                className="sm:w-16 w-full sm:h-[173px] h-10 sm:m-auto sm:mr-0 sm:vertical-rl text-white flex justify-center items-center  bg-primary rounded hover:bg-hover_primary"
            >
                Book Now
            </button>
        </div>
    );
};

export default HotelCard;
