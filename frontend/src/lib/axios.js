import axios from "axios";

export const axiosInstance = axios.create({
    // Fixed: Added // after http:
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "/api",
    withCredentials: true,
});