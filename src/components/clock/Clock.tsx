'use client';
import { useState, useEffect } from "react";
import { DateTime } from "luxon";

import { GetTimeZoneId } from "../../lib/google/FetchData";


type ClockProps = {
    long: number;
    lat: number;
    traveler: string;
}

export function Clock(props: ClockProps) {
    const [timeZone, setTimeZone] = useState<DateTime>(DateTime.now());
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        GetTimeZoneId(props.lat, props.long)
            .then((timezone) => {
                const tz = DateTime.now().setZone(timezone);

                setTimeZone(tz);
                setLoading(false);
            });
    }, []);

    const timeText = () => {
        const difference = timeZone.hour - DateTime.now().hour;

        if (difference === 0) {
            return 'You are in the same time zone';
        } else if (difference > 0) {
            return `${props.traveler} is ${difference} hours ahead`;
        } else {
            return `${props.traveler} is ${Math.abs(difference)} hours behind`;
        }
    }

    return (
        <div className="flex relative tabular-nums rounded-full w-20 h-20 text-grey-darker
        text-xl font-h1 font-bold ring-4 ring-offset-3 ring-offset-bg ring-grey-lightest
        items-center fustify-center mx-auto my-4 cursor-cell scale-100
        group hover:scale-110 duration-300">
            <div className="m-auto">
                {!loading && timeZone.toFormat('HH:mm') || "00:00"}
            </div>
            <span className="absolute flex -top-1 -right-1 w-8 h-8
            bg-grey-lightest border-4 border-bg rounded-full
            text-xs text-center items-center fustify-center
            group-hover:bg-accent group-hover:text-white duration-300">
                <div className="m-auto">
                    {!loading && `${(timeZone.hour - DateTime.now().hour <= 0 ? "" : "+")}${timeZone.hour - DateTime.now().hour}` || "0"}
                    <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded
                    px-2 py-1 opacity-0 transition
                    text-xs font-normal text-grey-darkest
                    before:border-t-grey-lightest bg-grey-lightest
                    before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4
                    before:border-transparent before:content-[''] group-hover:opacity-100">
                        {!loading && timeText()}
                    </span>
                </div>
            </span>
        </div>
    );
}