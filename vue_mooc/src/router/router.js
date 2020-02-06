import Home from '../views/Home/Home'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/course_detail/:id',
    name: 'course_detail',
    component: () => import('../views/CourseDetail/CourseDetail')
  }
]

export default routes
