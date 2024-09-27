import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const WidgetCard = ({ id, name, city, price, picture, searchParam }) => {
    const router = useRouter();

    const handleOnClick = () => {
        router.push({
            pathname: `/explore-hotel/${id}`,
            query: searchParam,
        });
    };

    return (
        <div>
            <Image
                src={picture}
                width={0}
                height={0}
                sizes="100vw"
                className="w-full sm:h-[280px]"
                alt="hotel picture"
            />
            <div className="sm:flex mt-3">
                <div>
                    <p className="text-[20px] font-medium">
                        {name}, {city}
                    </p>
                    <p>Price starts from ฿ {price[1]}</p>
                </div>
                <button
                    onClick={handleOnClick}
                    className="ml-auto sm:mt-0 mt-3 text-primary text-[18px] font-medium w-[184px] h-14 rounded shadow-md shadow-grey border hover:bg-primary hover:text-white"
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

export default WidgetCard;
