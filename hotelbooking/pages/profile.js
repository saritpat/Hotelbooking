import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Profile = () => {
    return (
        <div>
            <Head>
                <title>Trips</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <div className="flex flex-col items-center">
                <div className="min-h-screen flex sm:flex-row flex-col justify-center items-center sm:w-3/4 w-full">
                    <div className="sm:w-3/5 w-4/5 flex flex-col justify-start items-start sm:p-8">
                        <h1 className="sm:text-[72px] text-[24px] font-bold text-primary mb-4">
                            Profile page
                        </h1>
                        <p className="sm:text-[24px] text-base text-200 mb-8 w-3/4">
                            Nothing here yet either explore our hotel !
                        </p>

                        <Link
                            href="/"
                            className="bg-primary hover:bg-hover_primary text-white text-[24px] font-medium py-4 px-8 rounded sm:w-auto w-full justify-center flex"
                        >
                            Explore
                        </Link>
                    </div>
                    <div className="w-2/5 sm:flex justify-center items-center hidden">
                        <Image
                            src={"/hotel-picture/h9.png"}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-full rounded-full"
                            alt="start picture"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
