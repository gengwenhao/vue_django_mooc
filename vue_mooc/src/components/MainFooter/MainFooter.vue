<template>
  <div id="main-footer">
    <div class="container">
      <p>
        <a href="//github.com/gengwenhao" target="_blank"><i class="iconfont icon-github"></i> GitHub</a>
        <a href="//weibo.com/u/6739481217" target="_blank"><i class="iconfont icon-weibo"></i> 新浪微博</a>
        <a href="#"><i class="iconfont icon-wechat"></i> 微信HNGENWH</a>
        <a href="//cnblog.com/gengwenhao" target="_blank"><i class="iconfont icon-CN_cnblogs"></i> 博客园</a>
        <a href="//github.com/gengwenhao/vue_django_mooc" target="_blank"><i class="iconfont icon-about"></i> About 小耿课堂
        </a>
      </p>
      <p><a href="#">Copyright &copy; gengwenhao.cn</a><a href="">辽ICP备19006965号-1</a></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MainFooter"
  }
</script>

<style scoped lang="scss">
  @import "../../static/scss/constant";
  @import "../../static/scss/mixins";

  #main-footer {
    margin-top: 50px;
    width: 100%;
    /*position: absolute;*/
    /*bottom: 0;*/
    background: $footerBGColor;
    box-sizing: border-box;

    .container {
      @include container;

      padding: 35px 0;
      text-align: center;
      color: #8e8e68;

      a {
        text-decoration: none;
        color: #8e8e68;
        padding: 10px 5px;
      }

      p {
        margin-top: 8px;

        &:nth-child(1) {
          a {
            margin-right: 15px;

            &:hover {
              color: #CCCC99;
            }
          }
        }

      }
    }
  }
</style>