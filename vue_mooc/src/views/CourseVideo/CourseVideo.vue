<template>
  <div id="course-video">
    <main-nav></main-nav>
    <video-panel></video-panel>
    <main-footer></main-footer>
  </div>
</template>

<script>
  import MainNav from '../../components/MainNav/MainNav'
  import MainFooter from '../../components/MainFooter/MainFooter'
  import VideoPanel from './VideoPanel'

  export default {
    name: "CourseVideo",
    components: {VideoPanel, MainFooter, MainNav}
  }
</script>

<style scoped lang="scss">
  #course-video {

  }
</style>