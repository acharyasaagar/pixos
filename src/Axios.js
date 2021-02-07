import axios from 'axios'

const Axios = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'd9dbf53e99fd477a1b9c4ae5257a669d',
    language: 'en-US',
  },
})

export default Axios
