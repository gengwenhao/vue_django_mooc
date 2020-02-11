import {getBanner, getBannerNav, getCourse} from '../api/api'


const actions = {
  updateBanner({commit}) {
    getBanner().then(res => {
      commit('SET_BANNER', res.data.results)
    })
  },
  updateBannerNav({commit}) {
    getBannerNav().then(res => {
      commit('SET_BANNER_NAV', res.data.results)
    })
  },
  updateHomeJRMS({commit}) {
    let tagName = '今日秒杀'
    getCourse({tagName}).then(res => {
      commit('SET_HOME_JRMS', res.data.results)
    })
  },
  updateHomeJSJ({commit}) {
    let tagName = '计算机'
    getCourse({tagName}).then(res => {
      commit('SET_HOME_JSJ', res.data.results)
    })
  },
  updateHomeTED({commit}) {
    let tagName = 'ted'
    getCourse({tagName}).then(res => {
      commit('SET_HOME_TED', res.data.results)
    })
  },
  updateHomeSYCJ({commit}) {
    let tagName = '商业财经'
    getCourse({tagName}).then(res => {
      commit('SET_HOME_SYCJ', res.data.results)
    })
  },
  updateHomeSHBK({commit}) {
    let tagName = '生活百科'
    getCourse({tagName}).then(res => {
      commit('SET_HOME_SHBK', res.data.results)
    })
  }
}


export default actions