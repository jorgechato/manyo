import { Indicator } from "./Indicator";
import { StatusCode } from "../../lib/status-page/StatusPage.types";


export function StatusPageInfo() {
    return (
        <ul className="opacity-50 cursor-pointer hover:opacity-100 transition duration-500
            border border-grey-light rounded-md p-6 mt-10 mb-10
            text-center columns-3 gap-2">
            {Object.keys(StatusCode).map((type: string, index: number) => {
                return (
                    <li key={index} className="inline-flex items-center w-full text-xs text-center">
                        <Indicator type={type as StatusCode} />
                        <span className="text-grey-darkest ml-2">{type}</span>
                    </li>
                );
            })}
        </ul>
    )
}