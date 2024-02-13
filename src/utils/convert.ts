/* eslint-disable @typescript-eslint/no-explicit-any */
function ObjectToQueryString(obj: Record<string, any>): string {
    const result: string = Object.entries(obj)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join('&');
        
    return result;
}

function dateToString(date: string): string {
    const result = new Date(date).toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    return result;
}

export {
    ObjectToQueryString,
    dateToString
};