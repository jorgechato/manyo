import { Status, StatusCode } from "./StatusPage.types";


export function GetStatus(url: string, name: string): Promise<Status> {
    if (!url) {
        return Promise.resolve({
            type: StatusCode.UNKNOWN,
            url: "",
            watching: url,
            name: name,
        } as Status);
    }

    return fetch(url)
        .then((res) => {
            if (!res.ok) {
                let error = StatusCode.UNKNOWN;

                switch (res.status.toString()[0]) {
                    case "5":
                        error = StatusCode.MAJOR;
                        break;
                    case "4":
                        error = StatusCode.MINOR;
                        break;
                    case "3":
                        error = StatusCode.MAINTENANCE;
                        break;
                }

                return {
                    type: error,
                    url: new URL(url).origin,
                    name: name,
                } as Status;
            }
            return res.json() as Promise<Status>;
        })
        .then((status) => {
            status.watching = url;
            return status;
        })
        .catch((err) => {
            console.error(err)
            return {
                type: StatusCode.MAJOR,
                url: new URL(url).origin,
                watching: url,
                name: name,
            } as Status;
        });
}