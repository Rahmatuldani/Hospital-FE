import axios, { AxiosInstance } from "axios";
import app from "../config/app";
import { UserType } from "../store/users/types";

const userApi = (() => {
    const server: AxiosInstance = axios.create({
        baseURL: `${app.serverUrl}/users`,
        headers: {
            'Content-Type': 'application/json'
        }
    });

    async function getAllUsers() {
        const result = await server.get('/');
        return [result.status, result.data];
    }
    
    async function createUser(user: UserType) {
        const result = await server.post('/', user);
        return [result.status, result.data];
    }
    
    async function deleteUser(id: string) {
        console.log('id : ', id);
        
        const result = await server.delete(`/${id}`);
        return [result.status, result.data];
    }

    return {
        getAllUsers,
        createUser,
        deleteUser
    };
})();

export default userApi;