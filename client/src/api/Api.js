import axios from "axios";

const baseApiUrl =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/quanta";

const API = axios.create({
  baseURL: baseApiUrl,
});

const signup = (signupData) => {
  return API.post("/register", signupData);
};

const authApi = {
  signup,
};

export default authApi;
