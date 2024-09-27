import BackButton from "@/components/BackButton";
import MobileHead from "@/components/MobileHead";
import Navbar from "@/components/Navbar";
import PayCard from "@/components/payCard";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Payments = () => {
    const router = useRouter();
    const price = router.query;

    return (
        <div>
            <Head>
                <title>Payment</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <div className="sm:ml-8 mx-6 my-12 mt-8 sm:mb-0 mb-24">
                <div className="sm:block hidden">
                    <BackButton />
                </div>
                <div className="sm:hidden block">
                    <MobileHead name={"Payment details"} />
                </div>
                <div className="sm:flex sm:flex-row flex flex-col">
                    <div className="sm:w-2/3 w-full sm:ml-14 sm:order-1 order-2 sm:block flex flex-col sm:gap-0 gap-3">
                        <p className="my-10 text-[24px] font-medium sm:block hidden">
                            Payment Details
                        </p>
                        <PayCard
                            picture={"/debit-card.svg"}
                            name={"Debit Card"}
                        />
                        <PayCard picture={"/upi.svg"} name={"UPI"} />
                        <PayCard picture={"/phonepay.svg"} name={"PhonePay"} />
                        <PayCard
                            picture={"/net-banking.svg"}
                            name={"Net Banking"}
                        />
                        <PayCard
                            picture={"/credit-card.svg"}
                            name={"Credit Card"}
                        />
                    </div>
                    <div className="sm:w-1/3 w-full sm:mr-32 sm:mt-20 my-6 sm:h-[259px] h-auto sm:px-6 p-4 sm:py-8 rounded-lg shadow-lg sm:order-2 order-1">
                        <div className="sm:text-[20px] text-base text-[#0000008C]">
                            <div className="flex">
                                Base fare
                                <div className="ml-auto text-[#B7BCF3]">
                                    {price.price}.00
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
                                    {price.price}.00
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
                </div>
            </div>
        </div>
    );
};

export default Payments;
