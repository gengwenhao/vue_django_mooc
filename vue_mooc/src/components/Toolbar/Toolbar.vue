<template>
  <div id="toolbar">
    <div class="item-list">
      <div class="item"><i class="iconfont icon-code"></i></div>
      <div class="item"><i class="iconfont icon-pen"></i></div>
      <div @click="toTop" class="item"><i class="iconfont icon-top"></i></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Toolbar",
    methods: {
      toTop() {
        let timer = setInterval(function () {
          let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
          let ispeed = Math.floor(-scrollTop / 6);

          if (scrollTop === 0) {
            clearInterval(timer);
          }
          document.documentElement.scrollTop = document.body.scrollTop = scrollTop + ispeed;
        }, 30)
      }
    }
  }
</script>

<style scoped lang="scss">
  #toolbar {
    .item-list {
      position: fixed;
      right: 0;
      bottom: 0;
      transform: translate(-50%, -50%);
      z-index: 1;

      .item {
        width: 60px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        cursor: pointer;
        border: 1px solid rgba(51, 51, 51, 0.24);
        transition: all 0.3s ease;

        &:hover {
          background: rgba(0, 0, 0, 0.13);
        }

        i {
          font-size: 30px;
        }
      }
    }
  }
</style>