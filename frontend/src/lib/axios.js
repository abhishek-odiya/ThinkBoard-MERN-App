import axios from "axios";

// In production, there is no localHost so we have to make this dynamic
const base_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

const api = axios.create({
    baseURL: base_URL,
});

export default api;