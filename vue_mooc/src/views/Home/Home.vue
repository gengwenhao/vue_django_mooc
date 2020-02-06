<template>
  <div id="home">
    <main-nav></main-nav>
    <div class="banner-container">
      <div class="inner-container">
        <category-menu></category-menu>
        <banner></banner>
      </div>
    </div>
    <course-panel></course-panel>
    <main-footer></main-footer>
  </div>
</template>

<script>
  import MainNav from '../../components/MainNav/MainNav'
  import Banner from './Banner'
  import CategoryMenu from './CategoryMenu'
  import CoursePanel from './CoursePanel'
  import MainFooter from '../../components/MainFooter/MainFooter'

  export default {
    name: "Home",
    components: {MainFooter, CoursePanel, CategoryMenu, Banner, MainNav}
  }
</script>

<style scoped lang="scss">
  @import "../../static/scss/mixins";

  #home {
    position: relative;
    width: 100%;

    .banner-container {
      width: 100%;
      height: 425px;
      background: #000;

      .inner-container {
        @include container;
        position: relative;
      }
    }
  }
</style>
