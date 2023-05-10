export function GetTimeZoneId(
    lat: number, long: number,
    timestamp: number = Math.floor(Date.now() / 1000)
): Promise<string> {
    const url = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${long}&timestamp=${timestamp}&key=${process.env.GOOGLE_KEY}`;

    return fetch(url)
        .then((response) => response.json())
        .then((data) => data.timeZoneId)
        .catch((error) => error);
};