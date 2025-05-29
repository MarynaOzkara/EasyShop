import axios from "axios";

export const backend = axios.create({
  baseURL: "https://easyshop-tic5.onrender.com",
  // baseURL: "http://localhost:9000",
});
