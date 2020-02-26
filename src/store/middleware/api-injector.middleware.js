
import axios from 'axios';
import { getLanguage } from '../../i18n';
import tokenService from '../../services/token.service';

axios.interceptors.request.use((config) => {
  console.log(config);
  const accessToken = tokenService.getToken();
  const language = getLanguage();
  console.log(accessToken, language);
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  if (language) {
    // config.headers.language = language;
  }
  return config;
}, error => Promise.reject(error));
