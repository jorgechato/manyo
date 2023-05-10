import { DateTime } from "luxon";

import { Location } from '../../lib/nomadlist/NomadList.types';


type AltProps = {
    of: string,
    now?: Location,
    next?: Location,
    in?: string,
}

export function Alt(props: AltProps) {
    return (
        <>
            <div className="font-h1 font-bold mt-4 text-lg">
                <span className='text-grey-darkest'>{props.of} is currently in </span>
                {
                    props.now != undefined &&
                    props.now?.city.toUpperCase() + ', ' + props.now?.countryCode.toLocaleUpperCase()
                }
            </div>
            {
                props.in != undefined &&
                (
                    <div className='font-h1 font-bold text-xs text-grey-darker'>
                        Leaving for {props.next?.country} {DateTime.fromFormat(props.in, "YYYY-MM-DD").toRelativeCalendar()}
                    </div>
                )
            }
        </>
    )
}