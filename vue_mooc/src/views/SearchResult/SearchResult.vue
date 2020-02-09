<template>
  <div id="search-result">
    <main-nav></main-nav>
    <div class="course-result-container">
      <course-result></course-result>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
  import MainNav from '../../components/MainNav/MainNav'
  import MainFooter from '../../components/MainFooter/MainFooter'
  import CourseResult from './CourseResult'

  export default {
    name: "SearchResult",
    components: {CourseResult, MainFooter, MainNav}
  }
</script>

<style scoped lang="scss">
  #search-result {
    .course-result-container {
      box-sizing: border-box;
      margin-top: 130px;
      padding-top: 50px;
      min-height: 300px;
    }
  }
</style>