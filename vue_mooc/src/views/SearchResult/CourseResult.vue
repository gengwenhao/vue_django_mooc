<template>
  <div id="course-result">
    <div class="container">
      找到如下 “{{searchKey}}” 相关内容
    </div>
  </div>
</template>

<script>
  export default {
    name: "CourseResult",
    computed: {
      searchKey() {
        return this.$route.params.searchKey
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../static/scss/constant";
  @import "../../static/scss/mixins";

  #course-result {
    .container {
      @include flexContainer;


    }
  }
</style>