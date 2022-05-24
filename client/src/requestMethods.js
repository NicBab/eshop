import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODE4MzNlODk4YTg0MTI4YTQyZTFiYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MzM0Nzc5NiwiZXhwIjoxNjUzNjA2OTk2fQ.48iSrDtK-_L5RHuINmPivPUpAw65eiAcZe6jPOhBwF8"

export const publicRequest = axios.create({
    baseURL: BASE_URL
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
});