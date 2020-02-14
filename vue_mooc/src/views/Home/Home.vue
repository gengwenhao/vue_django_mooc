<template>
  <div id="home">
    <main-nav></main-nav>
    <div class="banner-container">
      <div class="inner-container">
        <banner-nav></banner-nav>
        <banner></banner>
      </div>
    </div>
    <course-list></course-list>
    <main-footer></main-footer>
  </div>
</template>

<script>
  import MainNav from '../../components/MainNav/MainNav'
  import Banner from './Banner'
  import BannerNav from './BannerNav'
  import CourseList from './CourseList'
  import MainFooter from '../../components/MainFooter/MainFooter'

  export default {
    name: "Home",
    components: {BannerNav, MainFooter, CourseList, Banner, MainNav}
  }
</script>

<style scoped lang="scss">
  @import "../../static/scss/mixins";

  #home {
    position: relative;
    width: 100%;

    .banner-container {
      margin-top: 130px;
      width: 100%;
      height: 425px;
      background: #000;
      box-shadow: 0 0 0 1px hsla(0, 0%, 100%, .3) inset,
      0 .1em .4em rgba(0, 0, 0, 0.6);

      .inner-container {
        @include container;
        position: relative;
      }
    }
  }
</style>
