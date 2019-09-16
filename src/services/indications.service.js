import axios from 'axios'

export default {
  getAllMoviesAndSeries: () => {
    return axios.get('https://api.assisteai.com.br/movies?page=0')
      .then( resp => resp.data)
      .catch(error => console.log(error))
  }
}
