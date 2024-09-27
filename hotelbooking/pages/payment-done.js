import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const PaymentDone = () => {
    const router = useRouter();

    const backToExplore = () => {
        router.push("/");
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen sm:m-0 p-6">
            <Head>
                <title>Payment done</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <div>
                <Image src={"/payment.svg"} width={800} height={480} alt="payment done" />
            </div>
            <div className="text-primary font-semibold sm:text-5xl text-[20px] mt-12 mb-[6px]">
                Booking Successfully completed
            </div>
            <div className="sm:w-auto w-5/6 text-center">
                Your trip schedule is ready,please check under profile.
            </div>
            <button
                onClick={backToExplore}
                className="sm:w-[243px] w-full h-[62px]  bg-primary border text-white rounded sm:mt-[32px] mt-[208px] text-[22px] hover:opacity-80"
            >
                Home
            </button>
        </div>
    );
};

PaymentDone.getLayout = (page) => page;

export default PaymentDone;
