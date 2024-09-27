import Image from "next/image";
import React from "react";

const BigPictureMobile = () => {
    return (
        <div>
            <div className="w-full">
                <Image
                    src={"/picture-mobile.png"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto rounded-b-3xl"
                    alt="big picture"
                />
            </div>
            <div className="absolute top-0 pt-12 pl-8 z-10">
                <Image
                    src={"/logo.svg"}
                    width={30}
                    height={34}
                    className="w-auto"
                    alt="logo"
                />
            </div>
            <div className="absolute top-0 w-full">
                <Image
                    src={"/bg-mobile.png"}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto rounded-b-3xl"
                    alt="background"
                />
            </div>
            <div className="absolute top-0 w-full px-6 pt-56 text-white">
                <div className=" text-[32px] font-medium">Incredible India</div>
                <div className="text-base font-medium">
                    “For where thy treasure is,
                    <br />
                    here also will thy heart be.”
                </div>
                <div>
                    <button className="w-full h-11 mt-6 border border-[#FFFFFF59] bg-[#FFFFFF67] rounded-sm hover:bg-[#c5c5c55e] text-[20px] font-semibold">
                        Take Tour
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BigPictureMobile;
