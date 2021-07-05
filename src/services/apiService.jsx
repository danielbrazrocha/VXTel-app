import axios from "axios";

//Configuração global da API no AXIOS
export const api = axios.create({
    baseURL: "http://https://basic-node-api.herokuapp.com/", //heroku
    //baseURL: "http://localhost:4242/", //dev
    headers: { "Content-Type": "application/json" },
  });

export const getDDDs = () => {
    return api.get('/ddd');
};

export const getPlans = () => {
    return api.get('/planos');
};

export const getCosts = () => {
    return api.get('/tarifas');
};

export const postCalculate = (data) => {
    return api.post('/calculate', data);
  };
