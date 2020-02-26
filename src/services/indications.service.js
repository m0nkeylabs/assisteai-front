import axios from 'axios';

export default {
  getAllMoviesAndSeries: page => axios.get(`https://api.assisteai.com.br/movies?page=${page}`)
    .then(resp => resp.data)
    .catch(error => console.log(error)),
};
