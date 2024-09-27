import BackButton from "@/components/BackButton";
import MobileHead from "@/components/MobileHead";
import SearchBar from "@/components/SearchBar";
import HotelRecommend from "@/components/hotelRecommend/HotelRecommend";
import HotelWidget from "@/components/hotelWidget/HotelWidget";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Hotels = () => {
    const router = useRouter();
    const [reccommendHotel, setReccommendHotel] = useState([]);

    const { location, checkIn, checkOut, room } = router.query;
    const [searchParam, setsearchParam] = useState({
        location: location,
        checkIn: checkIn,
        checkOut: checkOut,
        room: room,
    });
    const [results, setResults] = useState([]);

    // fetch all hotel + slice (5) for reccommend
    useEffect(() => {
        try {
            fetch("http://localhost:8000/api/hotels")
                .then((response) => response.json())
                .then((data) => {
                    setReccommendHotel(data.slice(0, 5));
                });
        } catch (error) {
            console.error("Error fetching hotels:", error);
        }
    }, []);

    // fetch for search result from api/search
    useEffect(() => {
        const searchParams = new URLSearchParams({ location });
        try {
            fetch(`http://localhost:8000/api/search?${searchParams.toString()}`)
                .then((response) => response.json())
                .then((data) => setResults(data));
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    }, [location]);

    // console.log(searchParam);

    return (
        <div className="sm:mt-10 sm:ml-8 sm:mb-0 mb-20">
            <Head>
                <title>Hotels</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <div className="sm:w-3/4 w-full sm:pt-0 pt-12 sm:pl-0 sm:pr-0 pr-6 pl-6">
                <div className="sm:flex">
                    <div className="sm:block hidden">
                        <BackButton />
                    </div>
                    <div className="sm:hidden block">
                        <MobileHead name={"Hotels"} />
                    </div>
                    <SearchBar />
                </div>
            </div>
            <div className="sm:mt-5 mt-4 flex sm:flex-row flex-col sm:gap-14">
                <div className="sm:w-3/4 w-full sm:order-1 order-2 sm:p-0 pt-9 p-6">
                    <div className="sm:flex items-center text-[20px] font-medium">
                        Best places to enjoy your stay
                        <div className="ml-auto flex gap-[22px] sm:mt-0 mt-3 sm:mb-0 mb-6">
                            <button className="border border-primary text-primary p-[15px] rounded hover:bg-primary hover:text-white">
                                Sort By
                            </button>
                            <button className="border border-primary text-primary p-[15px] rounded hover:bg-primary hover:text-white">
                                Filter
                            </button>
                        </div>
                    </div>
                    <HotelWidget hotels={results} searchParam={searchParam} />
                </div>
                <div className="ml-auto rounded sm:shadow-2xl sm-order-2 order-1">
                    <HotelRecommend hotels={reccommendHotel} />
                </div>
            </div>
        </div>
    );
};

export default Hotels;
