import BigPicture from "@/components/BigPicture";
import BigPictureMobile from "@/components/BigPictureMobile";
import SearchBar from "@/components/SearchBar";
import HotelList from "@/components/hotelList/HotelList";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
    const router = useRouter();
    const [query, setQuery] = useState({
        location: "",
        checkIn: "",
        checkOut: "",
        room: "",
    });

    const [recent, setRecent] = useState([]);

    useEffect(() => {
        async function fetch() {
            try {
                const response = await axios.get(
                    "http://localhost:8000/api/hotels"
                );
                console.log(response.data);
                setRecent(response.data.slice(5, 10));
            } catch (error) {
                console.error("Fetch Error :", error);
            }
        }

        fetch();
    }, []);

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
                <title>Explore</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <div className="sm:flex sm:w-1/2">
                <div className="sm:hidden block">
                    <BigPictureMobile />
                </div>
                <div className="sm:my-10 m-5 mb-24">
                    <SearchBar />
                    <div>
                        <h1 className="sm:block flex justify-center mt-5 text-primary sm:text-[38px] text-[24px] font-medium">
                            What Are You Looking For?
                        </h1>
                        <div className="mt-[26px] flex justify-center">
                            <div className="flex sm:gap-[100px] w-2/3 justify-around">
                                <Link href={"/"}>
                                    <div className="bg-[#2D3DDF] w-[58px] h-[58px] rounded-full flex justify-center shadow-[rgba(0,0,0,0.5)_5px_5px_15px_0px]">
                                        <Image
                                            src="/review.svg"
                                            width={36}
                                            height={24}
                                            className="h-auto"
                                            alt="hotel"
                                        />
                                    </div>
                                    <div className="flex justify-center mt-1">
                                        Hotel
                                    </div>
                                </Link>
                                <Link href={"/"}>
                                    <div className="w-[58px] h-[58px] rounded-full flex justify-center">
                                        <Image
                                            src={"/plane.svg"}
                                            width={36}
                                            height={24}
                                            className="h-auto"
                                            alt="plane"
                                        />
                                    </div>
                                    <div className="flex justify-center mt-1 text-[#696969]">
                                        Flight
                                    </div>
                                </Link>
                                <Link href={"/"}>
                                    <div className="w-[58px] h-[58px] rounded-full flex justify-center">
                                        <Image
                                            src={"/car.svg"}
                                            width={36}
                                            height={24}
                                            className="h-auto"
                                            alt="car"
                                        />
                                    </div>
                                    <div className="flex justify-center mt-1 text-[#696969]">
                                        Car
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className="mt-[30px]">
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    id="location"
                                    value={query.location}
                                    className="sm:w-[700px] w-full sm:h-[56px] h-11 border border-[#BEC3FF] rounded-md px-5 mb-[7px] focus:ring-1 focus:outline-none focus:ring-primary"
                                    placeholder="Location (ex. Chicago, Bangkok)"
                                    onChange={handleInputChange}
                                    required
                                />
                                <div>
                                    <input
                                        type="date"
                                        id="checkIn"
                                        value={query.checkIn}
                                        className="sm:w-[350px] w-1/2 sm:h-[56px] h-11 border border-[#BEC3FF] rounded-l-md px-5 mb-[7px] focus:ring-1 focus:outline-none focus:ring-primary"
                                        placeholder="From"
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <input
                                        type="date"
                                        id="checkOut"
                                        value={query.checkOut}
                                        className="sm:w-[350px] w-1/2 sm:h-[56px] h-11 border border-[#BEC3FF] rounded-r-md px-5 mb-[7px] focus:ring-1 focus:outline-none focus:ring-primary"
                                        placeholder="To"
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <input
                                    type="text"
                                    id="room"
                                    value={query.room}
                                    className="sm:w-[700px] w-full sm:h-[56px] h-11 border border-[#BEC3FF] rounded-md px-5 focus:ring-1 focus:outline-none focus:ring-primary"
                                    placeholder="Guest - room (ex. 1 adult, 1 children - 1 room)"
                                    onChange={handleInputChange}
                                    required
                                />
                                <div className="flex justify-center">
                                    <button
                                        onClick={handleSubmit}
                                        type="submit"
                                        className="sm:w-[256px] w-full sm:h-[68px] h-12 bg-primary border text-white rounded mt-[49px] text-[22px] hover:bg-hover_primary"
                                    >
                                        Search
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="mt-[42px]">
                        <HotelList
                            data={recent}
                            location={query.location}
                            checkIn={query.checkIn}
                            checkOut={query.checkOut}
                            room={query.room}
                        />
                    </div>
                </div>

                <div className="sm:block hidden">
                    <BigPicture />
                </div>
            </div>
        </div>
    );
}
