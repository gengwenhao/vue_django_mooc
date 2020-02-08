import axios from 'axios'

const HOST = '/'

export const getBanner = () => {
  return axios.get(`${HOST}home/banner/`)
}

export const getBannerMenu = () => {
  return axios.get(`${HOST}home/banner_categories/`)
}
