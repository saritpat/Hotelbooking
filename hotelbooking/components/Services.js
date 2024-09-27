import Image from "next/image";
import React from "react";

const Services = () => {
    return (
        <div>
            <div className="flex sm:gap-6 gap-3">
                <div className="sm:w-[50px] w-10 sm:h-[50px] h-10 shadow-lg sm:rounded-2xl rounded-xl flex justify-center items-center">
                    <Image
                        src={"/service-car.svg"}
                        width={0}
                        height={0}
                        className="sm:w-[30px] sm:h-[20px] w-[20px] h-[16px]"
                        alt="car"
                    />
                </div>
                <div className="sm:w-[50px] w-10 sm:h-[50px] h-10 shadow-lg sm:rounded-2xl rounded-xl flex justify-center items-center">
                    <Image
                        src={"/service-bath.svg"}
                        width={0}
                        height={0}
                        className="sm:w-[30px] sm:h-[20px] w-[20px] h-[16px]"
                        alt="bath"
                    />
                </div>
                <div className="sm:w-[50px] w-10 sm:h-[50px] h-10 shadow-lg sm:rounded-2xl rounded-xl flex justify-center items-center">
                    <Image
                        src={"/service-wine.svg"}
                        width={0}
                        height={0}
                        className="sm:w-[30px] sm:h-[20px] w-[20px] h-[16px]"
                        alt="wine"
                    />
                </div>
                <div className="sm:w-[50px] w-10 sm:h-[50px] h-10 shadow-lg sm:rounded-2xl rounded-xl flex justify-center items-center">
                    <Image
                        src={"/service-wifi.svg"}
                        width={0}
                        height={0}
                        className="sm:w-[30px] sm:h-[20px] w-[20px] h-[16px]"
                        alt="wifi"
                    />
                </div>
                <div className="sm:w-[50px] w-10 sm:h-[50px] h-10 shadow-lg sm:rounded-2xl rounded-xl flex justify-center items-center">
                    <Image
                        src={"/service-gym.svg"}
                        width={0}
                        height={0}
                        className="sm:w-[30px] sm:h-[20px] w-[20px] h-[16px]"
                        alt="gym"
                    />
                </div>
            </div>
        </div>
    );
};

export default Services;
