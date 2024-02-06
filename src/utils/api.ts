import axios, { AxiosInstance } from "axios";
import app from "../config/app";

const api = (() => {
    const server: AxiosInstance = axios.create({
        baseURL: app.serverUrl,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    async function getAllUsers() {
        const result = await server.get('/users');
        return [result.status, result.data];
    }

    return {
        getAllUsers
    };
})();

export default api;