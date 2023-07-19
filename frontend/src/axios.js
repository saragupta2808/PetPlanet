import axios from "axios";

// we need to pass the baseURL as an object  http://localhost:3000/petplanet/v1'
const API = axios.create({
  baseURL: 'https://pet-planet.onrender.com/petplanet/v1',
});

export default API;