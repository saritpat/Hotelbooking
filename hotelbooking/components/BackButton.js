import { useRouter } from "next/router";
import React from "react";

const BackButton = () => {
    const router = useRouter();

    const back = () => {
        router.back();
    };

    return (
        <div>
            <button
                onClick={back}
                className="w-14 h-14 bg-[#EBEDFF] rounded-full mr-5 hover:bg-primary hover:text-white"
            >
                {"<"}
            </button>
        </div>
    );
};

export default BackButton;
