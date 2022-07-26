import axios from 'axios'
import { config as appConfig } from './config'

const axiosConfig = {
  baseURL: appConfig.apiBaseUrl,
  headers: {
    common: {
      Accept: 'application/json',
    },
  },
}

const makeApi = (axios) => {
  return {
    get: (url, config = {}) => {
      const params = config.params || {}
      return axios.get(url, {
        ...config,
        params: {
          ...params,
          api_key: appConfig.apiKey,
        },
      })
    },
  }
}

export default makeApi(axios.create(axiosConfig))
