import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const RoomCard = ({ id, price, searchParam, type }) => {
    const router = useRouter();

    const handleOnClick = () => {
        if (!searchParam.location) {
            alert("Please enter Location");
        } else if (!searchParam.checkIn) {
            alert("Please enter Check In Date");
        } else if (!searchParam.checkOut) {
            alert("Please enter Check Out Date");
        } else if (!searchParam.room) {
            alert("Please enter Guest and room");
        } else {
            searchParam.roomType = type;
            searchParam.room_rate = price;

            router.push({
                pathname: `/review-hotel/${id}`,
                query: searchParam,
            });
        }
    };

    return (
        <div className="flex sm:flex-row flex-col border border-[#D1D1D1] sm:rounded rounded-t sm:h-[173px] sm:gap-2">
            <div>
                <Image
                    src={"/hotel-picture/h7.png"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="sm:w-auto sm:h-full w-full h-auto"
                    alt="hotel room"
                />
            </div>
            <div className="flex items-center sm:mt-0 sm:mb-0 sm:ml-0 sm:mr-0 mt-3 mb-4 ml-3 mr-7 sm:w-1/2">
                <div>
                    <div className="sm:mb-2 sm:text-[14px] text-[12px] font-medium">
                        {type} Room
                    </div>
                    <div className="text-primary font-bold sm:text-[25px] text-[14px]">
                        {price} BAHT/night
                    </div>
                </div>
            </div>
            <button
                onClick={handleOnClick}
                className="sm:w-16 w-full sm:h-[173px] h-10 m-auto mr-0 sm:vertical-rl text-white flex justify-center items-center  bg-primary rounded hover:bg-hover_primary"
            >
                Book Now
            </button>
        </div>
    );
};

export default RoomCard;
