const mutations = {
  SET_BANNER(state, banner) {
    state.banner = banner
  },
  SET_BANNER_NAV(state, bannerNav) {
    state.bannerNav = bannerNav
  },
  SET_HOME_JRMS(state, courses) {
    state.homeCourses['JRMS'] = courses
  },
  SET_HOME_JSJ(state, courses) {
    state.homeCourses['JSJ'] = courses
  },
  SET_HOME_TED(state, courses) {
    state.homeCourses['TED'] = courses
  },
  SET_HOME_SYCJ(state, courses) {
    state.homeCourses['SYCJ'] = courses
  },
  SET_HOME_SHBK(state, courses) {
    state.homeCourses['SHBK'] = courses
  }
}


export default mutations