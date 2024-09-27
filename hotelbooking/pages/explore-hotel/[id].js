import BackButton from "@/components/BackButton";
import MobileHead from "@/components/MobileHead";
import RoomCard from "@/components/RoomCard";
import SearchBar from "@/components/SearchBar";
import Services from "@/components/Services";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ExploreHotel = () => {
    const router = useRouter();
    const { id } = router.query;
    const searchParam = router.query;
    const [hotelData, setHotelData] = useState({});
    const [roomType, setRoomType] = useState([]);
    const [startPrice, setStartPrice] = useState(0);
    const [query, setQuery] = useState({
        location: searchParam.location || "",
        checkIn: searchParam.checkIn || "",
        checkOut: searchParam.checkOut || "",
        room: searchParam.room || "",
    });

    useEffect(() => {
        async function fetch() {
            try {
                const response = await axios.get(
                    `http://localhost:8000/api/hotels/${id}`
                );
                console.log(response.data);
                setHotelData(response.data);
                setRoomType(response.data.room_type);
                setStartPrice(response.data.room_rate[1] || 0);
            } catch (error) {
                console.error("Error fetch hotel id:", id, error);
            }
        }

        fetch();
    }, [id]);

    // console.log("data", roomType);
    // console.log("search param", searchParam);

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setQuery({
            ...query,
            [id]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!query.location) {
            alert("Please enter Location");
        } else if (!query.checkIn) {
            alert("Please enter Check In Date");
        } else if (!query.checkOut) {
            alert("Please enter Check Out Date");
        } else if (!query.room) {
            alert("Please enter Guest and room");
        } else {
            const searchParams = new URLSearchParams();
            if (query.location.trim()) {
                searchParams.append("location", query.location);
            }
            searchParams.append("checkIn", query.checkIn);
            searchParams.append("checkOut", query.checkOut);
            searchParams.append("room", query.room);

            console.log("searchParams = ", searchParams);
            router.push(`/hotels?${searchParams.toString()}`);
        }
    };

    // console.log(query);

    return (
        <div>
            <Head>
                <title>Explore Hotel</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <div className="sm:w-auto w-full sm:py-8 sm:pl-8 sm:pr-16 pb-4 pr-6 pl-6 py-12 bg-[#F4F7FF]">
                <div className="sm:flex">
                    <div className="sm:block hidden">
                        <BackButton />
                    </div>
                    <div className="sm:hidden block">
                        <MobileHead name={"Hotel details"} />
                    </div>
                    <SearchBar />
                </div>
                <form
                    onSubmit={handleSubmit}
                    className="sm:grid sm:grid-cols-6 flex flex-col sm:gap-x-[20px] gap-y-3 mt-[34px] "
                >
                    <input
                        type="text"
                        id="location"
                        onChange={handleInputChange}
                        className="sm:w-auto w-full sm:h-[62px] h-12 border border-[#BEC3FF] rounded-md px-5 focus:ring-1 focus:outline-none focus:ring-primary"
                        placeholder="Location (ex. Chicago, Bangkok)"
                        value={query.location}
                        required
                    />
                    <div className="flex col-span-2">
                        <input
                            type="date"
                            id="checkIn"
                            onChange={handleInputChange}
                            className="w-1/2 sm:h-[62px] h-12 bg-blue-100 cursor-not-allowed border border-[#BEC3FF] rounded-l-md px-5 focus:ring-1 focus:outline-none"
                            placeholder="From"
                            value={query.checkIn}
                            readOnly="readOnly"
                        />
                        <input
                            type="date"
                            id="checkOut"
                            onChange={handleInputChange}
                            className="w-1/2 sm:h-[62px] h-12 bg-blue-100 cursor-not-allowed border border-[#BEC3FF] rounded-r-md px-5 focus:ring-1 focus:outline-none"
                            placeholder="To"
                            value={query.checkOut}
                            readOnly="readOnly"
                        />
                    </div>
                    <input
                        type="text"
                        id="room"
                        onChange={handleInputChange}
                        className="sm:w-auto w-full sm:h-[62px] h-12 bg-blue-100 cursor-not-allowed border border-[#BEC3FF] rounded-md px-5 focus:ring-1 focus:outline-none"
                        placeholder="Guest - room (ex. 1 adult, 1 children - 1 room)"
                        value={query.room}
                        readOnly="readOnly"
                    />
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="sm:w-[256px] w-full sm:h-[62px] h-12 bg-primary border text-white rounded text-[22px] hover:bg-hover_primary"
                    >
                        Search
                    </button>
                </form>
            </div>
            <div className="sm:flex sm:gap-[68px] sm:mb-0 mb-20">
                <div className="sm:w-3/5 sm:ml-8 mx-6 mt-4">
                    <div className="grid sm:grid-cols-5 grid-cols-2 grid-rows-3 gap-3">
                        <div className="sm:col-span-3 sm:row-span-3 col-span-2 row-span-2 bg-blue-200">
                            <Image
                                src={hotelData.picture || ""}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-full"
                                alt="hotel picture"
                            />
                        </div>
                        <div className="sm:col-start-4 sm:col-span-2 col-span-1 sm:row-span-2 bg-green-200">
                            <Image
                                src={hotelData.picture || ""}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-full"
                                alt="hotel picture"
                            />
                        </div>
                        <div className="sm:col-start-4 col-start-1 col-span-1 row-start-3 row-span-1 bg-yellow-200 sm:block hidden">
                            <Image
                                src={hotelData.picture || ""}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-full"
                                alt="hotel picture"
                            />
                        </div>
                        <div className="sm:col-start-5 col-start-2 col-span-1 sm:row-start-3 row-span-1 bg-red-200">
                            <Image
                                src={"/see-all.png"}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-full"
                                alt="see all"
                            />
                        </div>
                    </div>
                    <div className="sm:flex sm:flex-row flex flex-col mt-3">
                        <div className="text-[28px] font-medium text-[#221F3C]">
                            {hotelData.hotel_name},
                            <p className="text-[18px] text-[#B7BCF3]">
                                {hotelData.city}
                            </p>
                        </div>
                        <div className="sm:ml-auto sm:mt-0 mt-3 sm:px-7 px-4 py-[10px] sm:w-auto sm:h-auto w-[242px] border font-medium sm:text-[18px] text-[14px] border-primary text-primary sm:flex sm:items-center rounded">
                            Price Starting from {startPrice} BAHT
                        </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-2 sm:mt-9 sm:mb-0 sm:gap-12 flex justify-between mt-8 mb-6">
                        {roomType.map((type, index) => (
                            <div key={index}>
                                <RoomCard
                                    id={hotelData.id}
                                    price={hotelData.room_rate[index]}
                                    searchParam={searchParam}
                                    type={type}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="rounded shadow-md sm:pl-11 sm:pt-8 sm:pb-10 sm:pr-[70px] pl-6 pt-5 pr-20 pb-6 sm:mb-6 mb-3 mx-6">
                        <div className="flex gap-5 mb-8">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center justify-center pr-2">
                                    <p className="text-white text-[28px] font-bold">
                                        {hotelData.rating}
                                    </p>
                                </div>
                                <Image
                                    src={"/bubble.svg"}
                                    width={76}
                                    height={59}
                                    alt="bubble"
                                />
                            </div>
                            <div>
                                <p className="font-medium text-[#221F3C]">
                                    Excellent
                                </p>
                                <p className="text-[#B7BCF3]">6879 Reviews</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex text-base justify-between">
                                Housekeeping
                                <Image
                                    src={"/rating.svg"}
                                    width={100}
                                    height={20}
                                    className="w-auto"
                                    alt="rating"
                                />
                            </div>
                            <div className="flex text-base justify-between">
                                Food
                                <Image
                                    src={"/rating.svg"}
                                    width={100}
                                    height={20}
                                    className="w-auto"
                                    alt="rating"
                                />
                            </div>
                            <div className="flex text-base justify-between">
                                Service
                                <Image
                                    src={"/rating.svg"}
                                    width={100}
                                    height={20}
                                    className="w-auto"
                                    alt="rating"
                                />
                            </div>
                            <div className="flex text-base justify-between">
                                Staff
                                <Image
                                    src={"/rating.svg"}
                                    width={100}
                                    height={20}
                                    className="w-auto"
                                    alt="rating"
                                />
                            </div>
                        </div>
                        <div>
                            Services
                            <Services />
                        </div>
                    </div>
                    <div className="flex">
                        <Image
                            src={"/wink.svg"}
                            width={40}
                            height={40}
                            alt="wink"
                        />
                        <p className="flex items-center sm:text-[20px] text-14px font-medium text-primary">
                            This property is in highly demand today.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExploreHotel;
