//jshint esversion:6
const axios = require("axios");

const instance = axios.create({
  // baseURL: "http://localhost:9000",
  baseURL: "https://devbook-live.herokuapp.com/",
});

export default instance;
