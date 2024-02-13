/* eslint-disable @typescript-eslint/no-explicit-any */
function ObjectToQueryString(obj: Record<string, any>): string {
    const result: string = Object.entries(obj)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
        
    return result;
}

export {
    ObjectToQueryString
};