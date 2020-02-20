<template>
  <div id="full-course">
    <main-nav></main-nav>
    <div class="course-box">
      <course-detail></course-detail>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
  import MainNav from '../../components/MainNav/MainNav'
  import MainFooter from '../../components/MainFooter/MainFooter'
  import CourseDetail from './CourseDetail'

  export default {
    name: "FullCourse",
    components: {CourseDetail, MainFooter, MainNav}
  }
</script>

<style scoped lang="scss">
  #full-course {
    .course-box {
      margin-top: 130px;
    }
  }
</style>