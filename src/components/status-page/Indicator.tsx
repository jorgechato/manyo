import { StatusCode } from '@/lib/status-page/StatusPage.types';


export function Indicator({ type }: { type: StatusCode }) {
    const indicatorClass = {
        [StatusCode.OK]: 'bg-green-500',
        [StatusCode.DEGRADED]: 'bg-yellow-500',
        [StatusCode.MINOR]: 'bg-orange-500',
        [StatusCode.MAJOR]: 'bg-red-500',
        [StatusCode.MAINTENANCE]: 'bg-violet-500',
        [StatusCode.UNKNOWN]: 'bg-gray-500',
    }[type];

    const indicatorLightClass = {
        [StatusCode.OK]: 'bg-green-400',
        [StatusCode.DEGRADED]: 'bg-yellow-400',
        [StatusCode.MINOR]: 'bg-orange-400',
        [StatusCode.MAJOR]: 'bg-red-400',
        [StatusCode.MAINTENANCE]: 'bg-violet-400',
        [StatusCode.UNKNOWN]: 'bg-gray-400',
    }[type];

    return (
        <span className="top-0 left-0 relative flex h-3 w-3">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${indicatorLightClass} opacity-75`}></span>
            <span className={`relative inline-flex rounded-full h-3 w-3 ${indicatorClass}`}></span>
        </span>
    );
}
