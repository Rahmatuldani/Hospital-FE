import axios, { AxiosInstance } from "axios";
import app from "../config/app";

const patientApi = (() => {
    const server: AxiosInstance = axios.create({
        baseURL: `${app.serverUrl}/patients`,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    async function readAll() {
        const result = await server.get('/');
        return [result.status, result.data];
    }
    

    return {
        readAll
    };
})();

export default patientApi;