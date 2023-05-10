import { DateTime } from "luxon";
const emoji = require('emoji-dictionary');

import { Location } from '../../lib/nomadlist/NomadList.types';


type TripListProps = {
    trips: Location[],
}

export function TripList(props: TripListProps) {
    return (
        <div className='mt-10 w-fit mx-auto'>

            {props.trips ? <div className='font-h1 text-lg font-bold mb-6 text-grey-darkest'>Upcoming trips</div> : <></>}

            <ol className="relative border-l border-grey-lightest text-left cursor-cell">
                {props.trips?.map((trip) => {
                    const flag = emoji.getUnicode(trip.countryCode.toLocaleLowerCase()) ?? emoji.getUnicode(trip.countrySlug);

                    return (
                        <li key={trip.latitude} className='font-h1 mb-10 ml-6 group'>
                            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3
                            ring-8 ring-grey-lightest bg-grey-light
                            group-hover:scale-125 scale-100 duration-300">
                                <div className="rounded-full shadow-lg">{flag}</div>
                            </span>
                            <h3 className="ml-2 flex items-center mb-1 font-semibold
                            group-hover:scale-105 scale-100 duration-300 transition-scale">{trip.city}</h3>
                            <time className="ml-2 block mb-2 text-sm font-normal leading-none text-grey-medium">
                                {DateTime.fromFormat(trip.dateStart, "yyyy-MM-dd").toLocaleString(DateTime.DATE_MED)}
                            </time>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
};