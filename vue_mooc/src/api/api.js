import axios from 'axios'
import {urlEncode} from '../lib/tool'

const HOST = '/'

export const getBanner = () => {
  return axios.get(`${HOST}banner/`)
}


export const getBannerNav = () => {
  return axios.get(`${HOST}banner_nav/`)
}


export const getSearchResult = (searchKey) => {
  return axios.get(`${HOST}search_result/${searchKey}`)
}


// 获取课程
export const getCourse = (params) => {
  return axios.get(`${HOST}course/?${urlEncode(params)}`)
}





