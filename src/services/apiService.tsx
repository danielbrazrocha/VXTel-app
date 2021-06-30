import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://basic-node-api.herokuapp.com/',
  //baseURL: 'http://localhost:3000',
  headers: {
    'Content-type': 'application/json',
  },
})

export const getDDDs = () => {
    return api.get('/ddd');
};
  