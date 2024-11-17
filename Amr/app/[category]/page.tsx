"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { data } from "../../fakeData/data";
import React from "react";

// Define the structure of the params
interface Params {
    category: string;
}

export default function Home({ params }: { params: Promise<Params> }) {
    const resolvedParams = React.use(params); // Unwrap the Promise

    const [shownCat, setShownCat] = useState<any>([]);

    useEffect(() => {
        if (resolvedParams?.category) {
            const test = data.filter((item) => item.title === resolvedParams.category)[0];
            setShownCat(test || []); // Default to an empty array if no match
        }
    }, [resolvedParams?.category]); // Add dependency to re-run effect when category changes

    return (
        <div className="p-5 w-full  bg-blue-400  h-screen ">
            <h1 className="text-[50px] m-5">Categories</h1>
            <div className="gap-5 flex flex-wrap items-center">

                {shownCat.length !== 0 && shownCat.items?.map((item: any) => (
                    <Link key={item.name} href={`/${resolvedParams?.category}/${item.name}`}>
                        <button className="w-[300px] h-[300px] font-serif rounded-2xl bg-gray-700 text-white  hover:outline-3 hover:outline font-bold outline-orange-500 outline-offset-2  transition-all">
                            {item.name}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
}
