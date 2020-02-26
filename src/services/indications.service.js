import axios from 'axios';

require('../store/middleware/api-injector.middleware');

export default {
  getAllMoviesAndSeries: page => axios.get(`https://api.assisteai.com.br/movies?page=${page}`)
    .then(resp => resp.data)
    .catch(error => console.error(error)),
};
