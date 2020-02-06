<template>
  <div id="course-detail">
    <main-nav></main-nav>
    <course-panel></course-panel>
    <main-footer></main-footer>
  </div>
</template>

<script>
  import MainNav from '../../components/MainNav/MainNav'
  import CoursePanel from '../Home/CoursePanel'
  import MainFooter from '../../components/MainFooter/MainFooter'

  export default {
    name: "CourseDetail",
    components: {MainFooter, CoursePanel, MainNav}
  }
</script>

<style scoped lang="scss">
  #course-detail {

  }
</style>