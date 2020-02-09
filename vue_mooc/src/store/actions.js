import {getBanner, getBannerNav} from '../api/api'


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
  }
}


export default actions