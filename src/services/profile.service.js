import axios from 'axios';

require('../store/middleware/api-injector.middleware');

export default {
  getProfile: () => axios.get('https://api.assisteai.com.br/auth/me')
    .then(resp => resp.data)
    .catch(error => console.error(error)),
};
