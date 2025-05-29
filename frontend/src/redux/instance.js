import axios from "axios";

export const backend = axios.create({
  //   baseURL: "https://easyshop-gh3r.onrender.com",
  baseURL: "http://localhost:9000",
});
