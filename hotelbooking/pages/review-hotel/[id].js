import BackButton from "@/components/BackButton";
import MobileHead from "@/components/MobileHead";
import SearchBar from "@/components/SearchBar";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ReviewHotel = () => {
    const router = useRouter();
    const { id } = router.query;
    const { roomType, checkIn, checkOut, room_rate, room } = router.query;
    const searchParam = router.query;
    const [search, setSearch] = useState({
        location: searchParam.location || "",
        checkIn: searchParam.checkIn || "",
        checkOut: searchParam.checkOut || "",
        room: searchParam.room || "",
    });

    const [hotelData, setHotelData] = useState([]);
    const [price, setPrice] = useState({
        nights: 0,
        price: 0,
        roomCount: 0,
        totalPrice: 0,
        vat: 0,
    });

    const [guestData, setGuestData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        specReq: "",
    });

    const [errors, setErrors] = useState({});

    // fetch hotel data
    useEffect(() => {
        async function fetch() {
            try {
                const response = await axios.get(
                    `http://localhost:8000/api/hotels/${id}`
                );
                console.log(response.data);
                setHotelData(response.data);
            } catch (error) {
                console.error("Fetch Error id :", id, error);
            }
        }

        fetch();
    }, [id]);

    // fetch price
    useEffect(() => {
        const params = new URLSearchParams({
            roomType,
            checkIn,
            checkOut,
            room_rate,
            room,
        });
        try {
            fetch(`http://localhost:8000/api/price?${params.toString()}`)
                .then((response) => response.json())
                .then((data) => setPrice(data));
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    }, []);

    // console.log("price", price);

    // console.log("data", hotelData);
    // console.log("search", searchParam);

    const handleGuestChange = (event) => {
        const { id, value } = event.target;
        setGuestData({
            ...guestData,
            [id]: value,
        });
    };

    const handleGuestSubmit = (event) => {
        event.preventDefault();

        const errors = {};

        if (!guestData.firstName) {
            errors.firstName = "First Name is required";
        }
        if (!guestData.lastName) {
            errors.lastName = "Last Name is required";
        }
        if (!guestData.email) {
            errors.email = "E-mail address is required";
        }
        if (!guestData.phone) {
            errors.phone = "Mobile number is required";
        }

        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            router.push({
                pathname: "/payments",
                query: price,
            });
        }
    };

    const handleSearchChange = (event) => {
        const { id, value } = event.target;
        setSearch({
            ...search,
            [id]: value,
        });
    };

    const handleSearch = (e) => {
        e.preventDefault();

        const searchParams = new URLSearchParams();
        if (search.location.trim()) {
            searchParams.append("location", search.location);
        }
        searchParams.append("checkIn", search.checkIn);
        searchParams.append("checkOut", search.checkOut);
        searchParams.append("room", search.room);

        console.log("searchParams = ", searchParams);
        router.push(`/hotels?${searchParams.toString()}`);
    };

    // console.log(search);

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
                        <MobileHead name={"Review hotel"} />
                    </div>
                    <SearchBar />
                </div>
                <form
                    onSubmit={handleSearch}
                    className="sm:grid sm:grid-cols-6 flex flex-col sm:gap-x-[20px] gap-y-3 mt-[34px] "
                >
                    <input
                        type="text"
                        id="location"
                        className="sm:w-auto w-full sm:h-[62px] h-12 border border-[#BEC3FF] rounded-md px-5 focus:ring-1 focus:outline-none"
                        placeholder="Location (ex. Chicago, Bangkok)"
                        onChange={handleSearchChange}
                        value={search.location}
                        required
                    />
                    <div className="flex col-span-2">
                        <input
                            type="date"
                            id="checkIn"
                            className="w-1/2 sm:h-[62px] h-12 bg-blue-100 cursor-not-allowed border border-[#BEC3FF] rounded-l-md px-5 focus:ring-1 focus:outline-none"
                            placeholder="From"
                            onChange={handleSearchChange}
                            value={search.checkIn}
                            readOnly="readOnly"
                        />
                        <input
                            type="date"
                            id="checkOut"
                            className="w-1/2 sm:h-[62px] h-12 bg-blue-100 cursor-not-allowed border border-[#BEC3FF] rounded-r-md px-5 focus:ring-1 focus:outline-none"
                            placeholder="To"
                            onChange={handleSearchChange}
                            value={search.checkOut}
                            readOnly="readOnly"
                        />
                    </div>
                    <input
                        type="text"
                        id="room"
                        className="sm:w-auto w-full sm:h-[62px] h-12 bg-blue-100 cursor-not-allowed border border-[#BEC3FF] rounded-md px-5 focus:ring-1 focus:outline-none focus:ring-primary"
                        placeholder="Guest - room (ex. 1 adult, 1 children - 1 room)"
                        onChange={handleSearchChange}
                        value={search.room}
                        readOnly="readOnly"
                    />
                    <button
                        onClick={handleSearch}
                        type="submit"
                        className="sm:w-[256px] w-full sm:h-[62px] h-12 bg-primary border text-white rounded text-[22px] hover:bg-hover_primary"
                    >
                        Search
                    </button>
                </form>
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-40">
                <div className="flex flex-col sm:order-1 order-1 sm:w-3/5 w-full sm:ml-8 px-6 sm:mb-0 mb-20">
                    {/* 1 */}
                    <div className="order-1 sm:order-1">
                        <div className="sm:mt-8 sm:mx-0 sm:pb-0 mt-6 mb-4 sm:flex">
                            <div>
                                <div className="sm:text-[24px] text-[16px] font-medium">
                                    Review your Booking
                                </div>
                                <div className="flex gap-4 sm:text-[24px] text-[16px] font-semibold text-primary">
                                    {hotelData.hotel_name}
                                    <Image
                                        src={"/rating.svg"}
                                        width={150}
                                        height={31}
                                        className="w-auto"
                                        alt="rating"
                                    />
                                </div>
                                <div className="sm:text-[20px] text-[14px] text-[#0000008C]">
                                    {hotelData.city}
                                    <p>This hotel is reviewed by global firm</p>
                                </div>
                            </div>
                            <div className="sm:ml-auto sm:mt-auto sm:block mt-4 flex justify-center">
                                <Image
                                    src={hotelData.picture}
                                    width={230}
                                    height={105}
                                    alt="hotel picture"
                                />
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-4 grid-cols-2 sm:py-[18px] sm:pl-8 sm:p-0 p-6 sm:mt-8 text-[#0000008C] text-[14px] bg-[#F4F7FF] items-center sm:rounded-xl rounded-md">
                            <div>
                                Check-in
                                <div className="text-black font-semibold sm:text-[20px] text-[16px]">
                                    {searchParam.checkIn}
                                </div>
                                10am
                            </div>
                            <div className="text-primary text-base">
                                <div className="bg-[#B7BCF3] flex justify-center py-[15px] w-[131px] rounded-md">
                                    {price.nights} night
                                </div>
                            </div>
                            <div>
                                Check-out
                                <div className="text-black font-semibold sm:text-[20px] text-[16px]">
                                    {searchParam.checkOut}
                                </div>
                                10am
                            </div>
                            <div className="text-black font-semibold sm:text-[20px] text-[16px]">
                                {searchParam.room}
                            </div>
                        </div>
                    </div>
                    {/* 1 */}
                    {/* 3 */}
                    <div className="order-2 sm:order-3 sm:mt-9 mt-6 sm:hidden block">
                        <div className="sm:p-4 sm:px-8 px-2 sm:pt-6 sm:pb-4">
                            <div className="sm:text-[20px] text-[14px] text-[#0000008C]">
                                <div className="flex">
                                    {price.roomCount} room X {price.nights}{" "}
                                    night
                                    <div className="ml-auto text-[#B7BCF3]">
                                        {price.price}
                                    </div>
                                </div>
                                <div className="flex my-[5px]">
                                    Total discount
                                    <div className="ml-auto text-[#B7BCF3]">
                                        0.00
                                    </div>
                                </div>
                                <div className="flex my-[5px]">
                                    Price after discount
                                    <div className="ml-auto text-[#B7BCF3]">
                                        {price.price}
                                    </div>
                                </div>
                                <div className="flex my-[5px]">
                                    Taxes & service fees
                                    <div className="ml-auto text-[#B7BCF3]">
                                        {price.vat}
                                    </div>
                                </div>
                            </div>
                            <div className="sm:text-[22px] text-[16px] font-bold flex my-[5px]">
                                Total Amount{" "}
                                <div className="text-primary ml-auto">
                                    {price.totalPrice}
                                </div>
                            </div>
                        </div>
                        <div className="sm:mt-8 p-4 rounded-lg shadow-lg">
                            <div className="sm:text-[20px] text-base font-medium text-[#221F3C]">
                                Cancellation Charges
                                <p className="sm:text-base text-[14px]">
                                    Non Refundable
                                </p>
                            </div>
                            <p className="text-[#0000008C]">
                                Penalty may be charged by the airline & by MMT{" "}
                                <br />
                                based on how close to departure date you cancel.{" "}
                                <br />
                                View fare rules to know more. <br /> <br />
                                VIEW POLICY
                            </p>
                        </div>
                    </div>
                    {/* 3 */}
                    {/* 2 */}
                    <div className="order-3 sm:order-2 mt-8">
                        <p className="mb-2">Guest Details</p>
                        <form onSubmit={handleGuestSubmit}>
                            <div className="sm:grid sm:grid-cols-6 sm:gap-3 flex flex-col gap-3">
                                <div className="sm:col-span-3">
                                    <input
                                        type="text"
                                        id="firstName"
                                        className={`w-full sm:h-[62px] h-12 border rounded-md px-5 focus:ring-1 focus:outline-none 
                                            ${
                                                errors.firstName
                                                    ? "border-red-500 focus:ring-red-500"
                                                    : "border-[#BEC3FF] focus:ring-primary"
                                            }
                                            `}
                                        placeholder="First Name"
                                        onChange={handleGuestChange}
                                        value={guestData.firstName}
                                        required
                                    />
                                    {errors.firstName && (
                                        <div className="text-red-500">
                                            {errors.firstName}
                                        </div>
                                    )}
                                </div>
                                <div className="sm:col-span-2">
                                    <input
                                        type="text"
                                        id="lastName"
                                        className={`w-full sm:h-[62px] h-12 border rounded-md px-5 focus:ring-1 focus:outline-none 
                                            ${
                                                errors.lastName
                                                    ? "border-red-500 focus:ring-red-500"
                                                    : "border-[#BEC3FF] focus:ring-primary"
                                            }
                                            `}
                                        placeholder="Last Name"
                                        onChange={handleGuestChange}
                                        value={guestData.lastName}
                                        required
                                    />
                                    {errors.lastName && (
                                        <div className="text-red-500">
                                            {errors.lastName}
                                        </div>
                                    )}
                                </div>
                                <div className="sm:col-span-3">
                                    <input
                                        type="email"
                                        id="email"
                                        className={`w-full sm:h-[62px] h-12 border rounded-md px-5 focus:ring-1 focus:outline-none 
                                            ${
                                                errors.email
                                                    ? "border-red-500 focus:ring-red-500"
                                                    : "border-[#BEC3FF] focus:ring-primary"
                                            }
                                            `}
                                        placeholder="E-mail address"
                                        onChange={handleGuestChange}
                                        value={guestData.email}
                                        required
                                    />
                                    {errors.email && (
                                        <div className="text-red-500">
                                            {errors.email}
                                        </div>
                                    )}
                                </div>
                                <div className="sm:col-span-2">
                                    <input
                                        type="number"
                                        id="phone"
                                        className={`w-full sm:h-[62px] h-12 border rounded-md px-5 focus:ring-1 focus:outline-none 
                                            ${
                                                errors.phone
                                                    ? "border-red-500 focus:ring-red-500"
                                                    : "border-[#BEC3FF] focus:ring-primary"
                                            }
                                            `}
                                        placeholder="Mobile number"
                                        onChange={handleGuestChange}
                                        value={guestData.phone}
                                        required
                                    />
                                    {errors.phone && (
                                        <div className="text-red-500">
                                            {errors.phone}
                                        </div>
                                    )}
                                </div>
                                <div className="my-3 col-span-2 flex justify-start pl-5">
                                    Add Guest +
                                </div>
                                <div className="col-span-5">
                                    <div>Special Request(optional)</div>
                                    <textarea
                                        id="specReq"
                                        value={guestData.specRequest}
                                        className="w-full min-h-[129px] p-2 mt-2 border border-[#BEC3FF] rounded-md focus:ring-1 focus:outline-none focus:ring-primary"
                                        placeholder="Other..."
                                    />
                                </div>
                            </div>
                            <button
                                onClick={handleGuestSubmit}
                                type="submit"
                                className=" my-8 sm:col-span-2 sm:w-[256px] w-full sm:h-[62px] h-12 bg-primary border text-white rounded text-[22px] hover:bg-hover_primary"
                            >
                                Continue
                            </button>
                        </form>
                    </div>
                    {/* 2 */}
                </div>

                {/* 3 */}
                <div className="order-2 sm:order-3 mt-9 sm:block hidden">
                    <div className="sm:p-4 pt-6 px-8 pb-4">
                        <div className="sm:text-[20px] text-[14px] text-[#0000008C]">
                            <div className="flex">
                                {price.roomCount} room X {price.nights} night
                                <div className="ml-auto text-[#B7BCF3]">
                                    {price.price}
                                </div>
                            </div>
                            <div className="flex my-[5px]">
                                Total discount
                                <div className="ml-auto text-[#B7BCF3]">
                                    0.00
                                </div>
                            </div>
                            <div className="flex my-[5px]">
                                Price after discount
                                <div className="ml-auto text-[#B7BCF3]">
                                    {price.price}
                                </div>
                            </div>
                            <div className="flex my-[5px]">
                                Taxes & service fees
                                <div className="ml-auto text-[#B7BCF3]">
                                    {price.vat}
                                </div>
                            </div>
                        </div>
                        <div className="sm:text-[22px] text-[16px] font-bold flex my-[5px]">
                            Total Amount{" "}
                            <div className="text-primary ml-auto">
                                {price.totalPrice}
                            </div>
                        </div>
                    </div>
                    <div className="sm:mt-8 sm:p-4 rounded-lg shadow-lg">
                        <div className="sm:text-[20px] text-base font-medium text-[#221F3C]">
                            Cancellation Charges
                            <p className="sm:text-base text-[14px]">
                                Non Refundable
                            </p>
                        </div>
                        <p className="text-[#0000008C]">
                            Penalty may be charged by the airline & by MMT{" "}
                            <br />
                            based on how close to departure date you cancel.{" "}
                            <br />
                            View fare rules to know more. <br /> <br />
                            VIEW POLICY
                        </p>
                    </div>
                </div>
                {/* 3 */}
            </div>
        </div>
    );
};

export default ReviewHotel;
