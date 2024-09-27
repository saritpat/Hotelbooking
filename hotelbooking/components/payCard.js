import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const PayCard = ({ picture, name }) => {
    const router = useRouter();

    const handlePayment = () => {
        router.push("/payment-done");
    };

    return (
        <div>
            <button
                onClick={handlePayment}
                className="group sm:w-[600px] w-full sm:p-[25px] px-4 flex gap-5 items-center text-[20px] font-medium rounded hover:border hover:border-primary hover:shadow-lg"
            >
                <Image
                    src={picture}
                    width={60}
                    height={60}
                    className="w-auto"
                    alt="card picture"
                />
                {name}
                <div className="ml-auto font-bold text-2xl text-primary hidden group-hover:block">
                    {">"}
                </div>
            </button>
        </div>
    );
};

export default PayCard;
