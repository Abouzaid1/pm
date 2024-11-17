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
        <div className="w-full h-screen p-1 bg-orange-300">

            <h1 className="text-[50px] m-5">Categories</h1>
            <div className="p-5 w-full flex flex-wrap gap-2">
                {shownCat.length !== 0 && shownCat.items?.map((item: any) => (
                    <Link key={item.name} className="h-fit" href={`/${resolvedParams?.category}/${item.name}`}>
                        <button className="w-[300px] mb-5 px-5 py-3 rounded-full bg-black text-white hover:bg-white hover:outline-3 hover:outline font-bold outline-orange-500 outline-offset-2 hover:text-black transition-all">
                            {item.name}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
}
