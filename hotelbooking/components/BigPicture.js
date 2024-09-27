import Image from "next/image";
import React from "react";

const BigPicture = () => {
    return (
        <div className="fixed right-0 w-[982px]">
            <div className="absolute">
                <Image
                    src={"/bigpic.png"}
                    width={982}
                    height={1080}
                    className="w-auto"
                    alt="big picture"
                />
            </div>
            <div className="absolute">
                <Image
                    src={"/bgbigpic.png"}
                    width={982}
                    height={1080}
                    className="w-auto"
                    alt="background"
                />
                <div className="fixed top-0 pt-[126px] pl-[426px]">
                    <Image
                        src="/planepic.svg"
                        width={100}
                        height={100}
                        className="w-auto"
                        alt="plane"
                    />
                </div>
                <div className="fixed right-0 top-1/2">
                    <Image
                        src="/pic-svg.svg"
                        width={100}
                        height={100}
                        className="w-auto"
                        alt="arrow-icon"
                    />
                </div>
                <div className="fixed text-white bottom-0 pb-[131px] pl-[70px]">
                    <div className="text-[63px] font-medium">
                        Incredible India
                    </div>
                    <div className="text-[33px] font-medium">
                        “For where thy treasure is,
                        <br />
                        here also will thy heart be.”
                    </div>
                    <div>
                        <button className="w-[179px] h-[64px] border border-[#FFFFFF59] bg-[#FFFFFF67] rounded-sm hover:bg-[#c5c5c55e] text-[20px]">
                            Take Tour
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BigPicture;
