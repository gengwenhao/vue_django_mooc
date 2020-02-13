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
    let tag__name = '今日秒杀'
    getCourse({tag__name}).then(res => {
      commit('SET_HOME_JRMS', res.data.results)
    })
  },
  updateHomeJSJ({commit}) {
    let tag__name = '计算机'
    getCourse({tag__name}).then(res => {
      commit('SET_HOME_JSJ', res.data.results)
    })
  },
  updateHomeTED({commit}) {
    let tag__name = 'ted'
    getCourse({tag__name}).then(res => {
      commit('SET_HOME_TED', res.data.results)
    })
  },
  updateHomeSYCJ({commit}) {
    let tag__name = '商业财经'
    getCourse({tag__name}).then(res => {
      commit('SET_HOME_SYCJ', res.data.results)
    })
  },
  updateHomeSHBK({commit}) {
    let tag__name = '生活百科'
    getCourse({tag__name}).then(res => {
      commit('SET_HOME_SHBK', res.data.results)
    })
  }
}


export default actions