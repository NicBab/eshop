import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODE4MzNlODk4YTg0MTI4YTQyZTFiYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzI3MDY3NSwiZXhwIjoxNjUzNTI5ODc1fQ.MMoDhZzN2AeSHNKJ7gwl-oD7mwOsBIa4FQL1UxmSlPY"

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});