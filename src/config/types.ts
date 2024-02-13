/* eslint-disable @typescript-eslint/no-explicit-any */
export type ServerResponse = {
    status: string,
    message: string,
    data: Record<string, any>,
}