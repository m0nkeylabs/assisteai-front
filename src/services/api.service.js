// import Config from 'react';
import { create } from 'apisauce';

export const API = create({
  baseURL: 'https://api.assisteai.com.br/',
  timeout: 60000,
});

API.addResponseTransform((response) => {
  if (!response.ok) throw response;
});

export default API;
