/* eslint-disable @typescript-eslint/no-explicit-any */
import Alert from "./alert";
import { isServerResponse } from "./typeCheck";

function ErrorHandler(error: any): void {
    if (error !== null) {
        if (error instanceof Error) {
            Alert({ icon: 'error', title: 'Error', text: error.message });
        }
        if (isServerResponse(error)) {
            Alert({ icon: 'error', title: 'Error', text: error.message });
        }
        if (typeof error === 'string') {
            Alert({ icon: 'error', title: 'Error', text: error });
        }
    }
}

export { 
    ErrorHandler 
};