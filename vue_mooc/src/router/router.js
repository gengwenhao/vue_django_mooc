import Home from '../views/Home/Home'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: '小耿课堂-首页'
    }
  },
  {
    path: '/search_result/:searchKey',
    name: 'searchResult',
    component: () => import('../views/SearchResult/SearchResult'),
    props: {default: true, sidebar: false},
    meta: {
      title: '小耿课堂 - 搜索结果'
    }
  },
  {
    path: '/full_course/:courseID',
    name: 'fullCourse',
    component: () => import('../views/FullCourse/FullCourse'),
    meta: {
      title: '小耿课堂 - 课程介绍'
    }
  },
  {
    path: '/course_video/:courseID/:chapterID/:lessonID/',
    name: 'courseVideo',
    component: () => import('../views/CourseVideo/CourseVideo'),
    meta: {
      title: '小耿课堂 - 课程播放'
    }
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/Error404/Error404'),
    meta: {
      title: '404页面未找到'
    }
  }
]

export default routes
