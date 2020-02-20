import Home from '../views/Home/Home'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/search_result/:searchKey',
    name: 'searchResult',
    component: () => import('../views/SearchResult/SearchResult'),
    props: {default: true, sidebar: false}
  },
  {
    path: '/full_course/:courseID',
    name: 'fullCourse',
    component: () => import('../views/FullCourse/FullCourse')
  },
]

export default routes
