import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:3300/api/'
});

// 192.168.0.110  --> API 