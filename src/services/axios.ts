import axiosLibrary from "axios";

const axios = axiosLibrary.create();

axios.defaults.headers.common["Authorization"] =
  `Bearer ${process.env.API_TOKEN}`;

export default axios;
