import axios, { AxiosInstance } from "axios";
import app from "../config/app";
import { AuthType } from "../store/auth/types";

const authApi = (() => {
    const server: AxiosInstance = axios.create({
        baseURL: `${app.serverUrl}`,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    async function login(user: AuthType) {
        const result = await server.post('/login', user);
        return [result.status, result.data];
    }

    return {
        login,
    };
})();

export default authApi;