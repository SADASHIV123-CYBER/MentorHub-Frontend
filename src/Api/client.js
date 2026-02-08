import axios from 'axios';


const API_ROOT = (import.meta.env.VITE_API_URL || 'http://localhost:3000' ).replace(/\/+$/, "");

console.log(API_ROOT);


export const client = axios.create({
  baseURL: `${API_ROOT}/api/v1`,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json", // ensure JSON works
  },
});

client.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      console.warn("Unauthorized – redirecting to login");
      // example: window.location.href = "/login";
    }
    return Promise.reject(err);
  }
)