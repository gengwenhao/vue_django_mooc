<template>
  <div id="error-404">
    <div class="error-info">
      <i class="iconfont icon-icon-test"></i>
      <h1>404NOT FOUND! <a href="/">回到首页</a></h1>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Error404"
  }
</script>

<style scoped lang="scss">
  #error-404 {
    .error-info {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }

    i.iconfont {
      font-size: 250px;
      color: #ff346a;
      margin-bottom: 25px;
    }

    h1 {
      text-align: center;
      font-size: 35px;
      font-family: 'Microsoft YaHei UI', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
      font-weight: bold;
      height: 50px;
      line-height: 50px;

      a {
        text-decoration: none;
        color: #E6E6B1;
      }
    }
  }
</style>