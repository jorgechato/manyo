import { DateTime } from "luxon";

import { Location } from '../../lib/nomadlist/NomadList.types';


type AltProps = {
    of: string,
    now?: Location,
    next?: Location,
    in?: string,
}

export function Alt(props: AltProps) {
    const next = props.next?.country == props.now?.country ? props.next?.city + ', ' + props.next?.countryCode.toLocaleUpperCase() : props.next?.country;

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
                        Leaving for {next} {DateTime.fromFormat(props.in, "yyyy-MM-dd").toRelativeCalendar()}
                    </div>
                )
            }
        </>
    )
}