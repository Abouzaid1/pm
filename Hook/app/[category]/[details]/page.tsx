"use client";
import { useEffect, useState } from "react";
import { data } from "../../../fakeData/data";
import React from "react";

interface Params {
    category: any;
    details: any;
}

export default function Home({ params }: { params: Promise<Params> }) {
    const resolvedParams = React.use(params); // Unwrap the Promise

    const [shownCat, setShownCat] = useState<any>({}); // Initialize as an empty object

    useEffect(() => {
        if (resolvedParams?.category && resolvedParams?.details) {
            const cat = data.find((item) => item.title === resolvedParams.category);
            const detail = cat?.items?.find((item) => item.name === resolvedParams.details);
            setShownCat(detail || {}); // Default to an empty object if no match
        }
    }, [resolvedParams.category, resolvedParams.details]); // Add dependencies

    return (
        <div className="p-5 w-full flex flex-col h-screen ">
            <h1 className="text-[50px] m-5">Details</h1>
            {shownCat.details ? (
                <h1 className="mb-5 px-5 py-3 text-black text-[20px]">
                    {shownCat.details}
                </h1>
            ) : (
                <p>No details available</p>
            )}
        </div>
    );
}
