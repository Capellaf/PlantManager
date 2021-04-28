import axios from 'axios';

declare module 'axios' {
    export interface AxiosRequestConfig {
        baseUrl: string;
    }
}

const api = axios.create({
    baseUrl: 'http://192.168.15.21:3333/',
});

export default api;