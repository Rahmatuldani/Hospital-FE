import axios, { AxiosInstance } from "axios";
import app from "../config/app";
import { PatientType } from "../store/patients/types";

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
    
    async function create(user: PatientType) {
        const result = await server.post('/', user);
        return [result.status, result.data];
    }

    return {
        readAll,
        create
    };
})();

export default patientApi;