import axios from 'axios';

const apiCodeBurger = axios.create({
  baseURL: 'http://localhost:3004',
});

export default apiCodeBurger;
