
import axios from 'axios';
import { getLanguage } from '../../i18n';
import tokenService from '../../services/token.service';

axios.interceptors.request.use((config) => {
  const accessToken = tokenService.getToken();
  const language = getLanguage();

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  if (language) {
    // config.headers.language = language;
  }
  return config;
}, error => Promise.reject(error));
