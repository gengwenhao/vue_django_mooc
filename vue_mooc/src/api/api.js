import axios from 'axios'
import {urlEncode} from '../lib/tool'

const HOST = '/api/'

export const getBanner = () => {
  return axios.get(`${HOST}banner/`)
}


export const getBannerNav = () => {
  return axios.get(`${HOST}banner_nav/`)
}


// 获取课程
export const getCourse = (params) => {
  return axios.get(`${HOST}course/?${urlEncode(params)}`)
}


// 获取课程详尽信息
export const getFullCourse = (courseID) => {
  return axios.get(`${HOST}full_course/${courseID}/`)
}




