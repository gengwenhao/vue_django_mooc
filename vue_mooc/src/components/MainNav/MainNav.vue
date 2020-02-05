<template>
  <div id="main-nav">
    <div class="container">
      <div class="item logo">
        <h1></h1>
      </div>
      <div class="item search">
        <input type="text" placeholder="搜索课程、视频、公开课策划">
        <i class="btn-search iconfont icon-search"></i>
      </div>
      <div class="item menu">
        <ul>
          <li v-if="isLogin">
            <div @click="">{{ userName }}</div>
          </li>
          <li v-else-if="isLogin">
            <div @click.prevent="">登录/注册</div>
          </li>
        </ul>
        <ul>
          <li><a href="">已购课程 <i class="iconfont icon-buyecschooseplan"></i></a></li>
        </ul>
        <ul>
          <li><a href="">个人中心<i class="iconfont icon-xia"></i> </a></li>
        </ul>
        <ul>
          <li><a href=""><i style="font-size: 9px;margin-right: 4px;"
                            class="iconfont icon-add1"></i>关注我们</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "MainNav",
    computed: {
      ...mapState([
        'isLogin',
        'userName'
      ])
    }
  }
</script>

<style scoped lang="scss">
  @import "../../static/scss/constant.scss";
  @import "../../static/scss/mixins.scss";

  #main-nav {
    height: 70px;
    padding: 30px 0;
    background: $navBGColor;

    .container {
      @include flexContainer;

      justify-content: space-between;

      .item {
        display: flex;
        align-items: center;

        /* logo */
        &:nth-child(1) {
          h1 {
            width: 250px;
            height: 70px;
            background: url("../../assets/logo_mini.png") no-repeat;
          }
        }

        /* search */
        &:nth-child(2) {
          width: 390px;
          position: relative;

          input {
            text-indent: $inputTextIndent;
            width: 348px;
            padding-right: 42px;
            outline: none;
            border: 1px solid $inputBorderColor;
            height: 32px;
            line-height: 32px;
            background: $inputBGColor;
            color: $inputFontColor;
            font-weight: bold;

            &::-webkit-input-placeholder { /* WebKit browsers */
              color: $inputPlaceholderFontColor;
              font-size: $inputPlaceholderFontSize;
              font-weight: normal;
            }

            &::-moz-placeholder { /* Mozilla Firefox 19+ */
              color: $inputPlaceholderFontColor;
              font-size: $inputPlaceholderFontSize;
              font-weight: normal;
            }

            &:-ms-input-placeholder { /* Internet Explorer 10+ */
              color: $inputPlaceholderFontColor;
              font-size: $inputPlaceholderFontSize;
              font-weight: normal;
            }
          }

          .btn-search {
            color: #707070;
            position: absolute;
            right: 0;
            display: block;
            width: 42px;
            height: 34px;
            line-height: 34px;
            text-align: center;
            background: $searchBtnColor;
            cursor: pointer;
          }
        }

        /* menu */
        &:nth-child(3) {
          display: flex;
          align-items: center;
          justify-content: center;

          /* 菜单 */
          ul {
            list-style: none;

            li {
              margin: 11px;
              line-height: 14px;

              a {
                text-decoration: none;
                font-size: 12px;
                color: #666;
                font-weight: bold;
              }
            }

            /* 关注我们 */
            &:nth-child(4) {
              background: #f1f1f1;
              margin-left: 12px;
            }
          }

        }
      }
    }

  }
</style>