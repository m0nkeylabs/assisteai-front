import axios from 'axios';

export default {
  login: (data) => {
    if (data.type === 'facebook') {
      return axios.post('https://api.assisteai.com.br/auth/login/facebook', { token: data.token })
        .then(resp => resp.data)
        .catch(error => console.log(error));
    }

    return axios.post('https://api.assisteai.com.br/auth/login/form', { token: data.token })
      .then(resp => resp.data)
      .catch(error => console.log(error));
  },
};
