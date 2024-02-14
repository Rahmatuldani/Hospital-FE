/* eslint-disable @typescript-eslint/no-explicit-any */
import Alert from "./alert";
import { isServerResponse } from "./typeCheck";

function ErrorHandler(error: any): void {
    if (error !== null) {
        if (error instanceof Error) {
            if (error.message === 'Network Error') {
                Alert({ icon: 'error', title: 'Server Connection Error', text: "Server offline or under maintenance. Please call administrator" });
            } else {
                Alert({ icon: 'error', title: 'Error', text: error.message });
            }
        }
        if (isServerResponse(error)) {
            if (error.data.error) {
                Alert({ icon: 'error', title: error.status, text: `${error.message}: ${error.data.error}` });
            }
            Alert({ icon: 'error', title: error.status, text: `${error.message}` });
        }
        if (typeof error === 'string') {
            Alert({ icon: 'error', title: 'Error', text: error });
        }
    }
}

export { 
    ErrorHandler 
};