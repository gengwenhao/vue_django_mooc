<template>
  <div id="home">
    <main-nav></main-nav>
    <banner></banner>
    <category-menu></category-menu>
  </div>
</template>

<script>
  import MainNav from '../../components/MainNav/MainNav'
  import Banner from './Banner'
  import CategoryMenu from './CategoryMenu'

  export default {
    name: "Home",
    components: {CategoryMenu, Banner, MainNav}
  }
</script>

<style lang="scss">
  #home {
    position: relative;
  }
</style>
