/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from "axios";
import { ServerResponse } from "../config/types";

function isServerResponse(data: any): data is ServerResponse {
    return (
        typeof data === 'object' && data !== null && 
        'status' in data && 'message' in data && 'data' in data
    );
}

function isAxiosError(error: any): error is AxiosError {
    return (
        error.isAxiosError && typeof error.response === 'object' &&
        'status' in error.response && 'data' in error.response
    );
}

export {
    isServerResponse,
    isAxiosError
};