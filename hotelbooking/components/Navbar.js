import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
    const [isHovered, setIsHovered] = useState("");
    const [isSelected, setSelected] = useState("search");

    return (
        <nav className="sm:grid grid-rows-5 text-white items-center justify-center sm:h-full h-1/8 sm:w-[157px] w-full sm:left-0 left-auto sm:top-0 top-auto bottom-0 bg-primary fixed sm:overflow-x-hidden overflow-x-auto sm:rounded-r-3xl sm:rounded-tl-none rounded-t-3xl z-10">
            <div className="sm:flex hidden row-span-1 justify-center">
                <Link href={"/home"}>
                    <Image
                        src={"/logo.svg"}
                        width={30}
                        height={30}
                        className="w-auto"
                        alt="logo"
                    />
                </Link>
            </div>
            <div className="row-span-3 sm:grid flex items-center justify-center  sm:gap-6 gap-1">
                <Link href={"/home"} onClick={() => setSelected("home")}>
                    {isSelected === "home" ? (
                        <div
                            onMouseEnter={() => setIsHovered("home")}
                            onMouseLeave={() => setIsHovered("")}
                            className="m-2 rounded-full bg-white p-3 sm:py-4 shadow-lg shadow-black"
                        >
                            <div className="flex justify-center">
                                <Image
                                    src={"/home-hover.svg"}
                                    width={20}
                                    height={20}
                                    className="w-auto"
                                    alt="home"
                                />
                            </div>
                            <div className="flex justify-center text-primary">
                                Home
                            </div>
                        </div>
                    ) : (
                        <div
                            onMouseEnter={() => setIsHovered("home")}
                            onMouseLeave={() => setIsHovered("")}
                            onClick={() => setSelected("home")}
                            className="m-2 rounded-full hover:bg-white hover:text-primary p-3 sm:py-4"
                        >
                            <div className="flex justify-center">
                                {isHovered === "home" ? (
                                    <Image
                                        src={"/home-hover.svg"}
                                        width={20}
                                        height={20}
                                        className="w-auto"
                                        alt="home"
                                    />
                                ) : (
                                    <Image
                                        src={"/home.svg"}
                                        width={20}
                                        height={20}
                                        className="w-auto"
                                        alt="home"
                                    />
                                )}
                            </div>
                            <div className="flex justify-center">Home</div>
                        </div>
                    )}
                </Link>
                <Link href={"/"} onClick={() => setSelected("search")}>
                    {isSelected === "search" ? (
                        <div
                            onMouseEnter={() => setIsHovered("search")}
                            onMouseLeave={() => setIsHovered("")}
                            className="m-2 rounded-full bg-white p-3 sm:py-4 shadow-lg shadow-black"
                        >
                            <div className="flex justify-center">
                                <Image
                                    src={"/search-hover.svg"}
                                    width={20}
                                    height={20}
                                    className="w-auto"
                                    alt="search"
                                />
                            </div>
                            <div className="flex justify-center text-primary">
                                Explore
                            </div>
                        </div>
                    ) : (
                        <div
                            onMouseEnter={() => setIsHovered("search")}
                            onMouseLeave={() => setIsHovered("")}
                            onClick={() => setSelected("home")}
                            className="m-2 rounded-full hover:bg-white hover:text-primary p-3 sm:py-4"
                        >
                            <div className="flex justify-center">
                                {isHovered === "search" ? (
                                    <Image
                                        src={"/search-hover.svg"}
                                        width={20}
                                        height={20}
                                        className="w-auto"
                                        alt="search"
                                    />
                                ) : (
                                    <Image
                                        src={"/search.svg"}
                                        width={20}
                                        height={20}
                                        className="w-auto"
                                        alt="search"
                                    />
                                )}
                            </div>
                            <div className="flex justify-center">Explore</div>
                        </div>
                    )}
                </Link>
                <Link href={"/trips"} onClick={() => setSelected("trips")}>
                    {isSelected === "trips" ? (
                        <div
                            onMouseEnter={() => setIsHovered("trips")}
                            onMouseLeave={() => setIsHovered("")}
                            className="m-2 rounded-full bg-white p-3 sm:py-4 shadow-lg shadow-black"
                        >
                            <div className="flex justify-center">
                                <Image
                                    src={"/heart-hover.svg"}
                                    width={20}
                                    height={20}
                                    className="w-auto"
                                    alt="trips"
                                />
                            </div>
                            <div className="flex justify-center text-primary">
                                Trips
                            </div>
                        </div>
                    ) : (
                        <div
                            onMouseEnter={() => setIsHovered("trips")}
                            onMouseLeave={() => setIsHovered("")}
                            onClick={() => setSelected("trips")}
                            className="m-2 rounded-full hover:bg-white hover:text-primary p-3 sm:py-4"
                        >
                            <div className="flex justify-center">
                                {isHovered === "trips" ? (
                                    <Image
                                        src={"/heart-hover.svg"}
                                        width={20}
                                        height={20}
                                        className="w-auto"
                                        alt="trips"
                                    />
                                ) : (
                                    <Image
                                        src={"/heart.svg"}
                                        width={20}
                                        height={20}
                                        className="w-auto"
                                        alt="trips"
                                    />
                                )}
                            </div>
                            <div className="flex justify-center">Trips</div>
                        </div>
                    )}
                </Link>
                <Link href={"/profile"} onClick={() => setSelected("profile")}>
                    {isSelected === "profile" ? (
                        <div
                            onMouseEnter={() => setIsHovered("profile")}
                            onMouseLeave={() => setIsHovered("")}
                            className="m-2 rounded-full bg-white p-3 sm:py-4 shadow-lg shadow-black"
                        >
                            <div className="flex justify-center">
                                <Image
                                    src={"/user-hover.svg"}
                                    width={20}
                                    height={20}
                                    className="w-auto"
                                    alt="profile"
                                />
                            </div>
                            <div className="flex justify-center text-primary">
                                Profile
                            </div>
                        </div>
                    ) : (
                        <div
                            onMouseEnter={() => setIsHovered("profile")}
                            onMouseLeave={() => setIsHovered("")}
                            onClick={() => setSelected("profile")}
                            className="m-2 rounded-full hover:bg-white hover:text-primary p-3 sm:py-4"
                        >
                            <div className="flex justify-center">
                                {isHovered === "profile" ? (
                                    <Image
                                        src={"/user-hover.svg"}
                                        width={20}
                                        height={20}
                                        className="w-auto"
                                        alt="profile"
                                    />
                                ) : (
                                    <Image
                                        src={"/user.svg"}
                                        width={20}
                                        height={20}
                                        className="w-auto"
                                        alt="profile"
                                    />
                                )}
                            </div>
                            <div className="flex justify-center">Profile</div>
                        </div>
                    )}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
