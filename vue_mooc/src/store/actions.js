import {getBanner, getBannerMenu} from '../api/api'


const actions = {
  updateBanner({commit}) {
    getBanner().then(res => {
      commit('SET_BANNER', res.data)
    })
  },
  updateBannerMenu({commit}) {
    getBannerMenu().then(res => {
      commit('SET_BANNER_MENU', res.data)
    })
  }
}


export default actions