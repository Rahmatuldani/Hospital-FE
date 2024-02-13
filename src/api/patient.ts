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

    async function readAllPatient() {
        const result = await server.get('/');
        return [result.status, result.data];
    }
    
    async function createPatient(patient: PatientType) {
        const result = await server.post('/', patient);
        return [result.status, result.data];
    }

    async function updatePatient(patient: PatientType) {
        console.log(patient);
        
        const result = await server.put(`/${patient._id}`, patient);
        return [result.status, result.data];
    }
    
    async function deletePatient(id: string) {
        const result = await server.delete(`/${id}`);
        return [result.status, result.data];
    }

    return {
        readAllPatient,
        createPatient,
        updatePatient,
        deletePatient,
    };
})();

export default patientApi;