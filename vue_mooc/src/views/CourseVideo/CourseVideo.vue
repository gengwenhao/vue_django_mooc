<template>
  <div id="course-video">
    <main-nav></main-nav>
    <video-player></video-player>
    <main-footer></main-footer>
  </div>
</template>

<script>
  import MainNav from '../../components/MainNav/MainNav'
  import MainFooter from '../../components/MainFooter/MainFooter'
  import VideoPlayer from './VideoPlayer'

  export default {
    name: "CourseVideo",
    components: {VideoPlayer, MainFooter, MainNav}
  }
</script>

<style scoped lang="scss">
  #course-video {

  }
</style>