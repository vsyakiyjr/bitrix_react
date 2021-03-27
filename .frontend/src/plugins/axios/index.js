import axios from "axios";
import interceptors from "./interceptors";

const instance = axios.create({
  baseURL: 'https://uttest.bitrix24.com',
  headers: {
    "Content-Type": "application/json",
  },
});

interceptors(instance);

export default instance;
