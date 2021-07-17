import axios from "axios";

const { REACT_APP_BELLA } = process.env;

const API = axios.create({
    baseURL: REACT_APP_BELLA,
});

export default API;
