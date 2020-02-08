<template>
  <div id="main-nav">
    <div class="banner-container">
      <div class="item logo">
        <h1></h1>
      </div>
      <div class="item search">
        <input v-model="inputVal"
               @input="handleFind"
               @keyup.enter="handleSearch" type="text"
               placeholder="搜索课程、视频">
        <i @click="handleSearch" class="btn-search iconfont icon-search"></i>
      </div>
      <div class="item menu">
        <ul>
          <li v-if="isLogin">
            <div class="username" @click="">{{ userName }}</div>
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
        <ul @click="isShowFollowPanel=true">
          <li><a>
            <i style="font-size: 9px;margin-right: 4px;"
               class="iconfont icon-add1"></i>关注我们</a>
          </li>
        </ul>
      </div>

      <!--   关注微博和豆瓣   -->
      <transition name="fade">
        <div @mouseleave="isShowFollowPanel=false" v-if="isShowFollowPanel" class="follow-panel">
          <a @click="isShowFollowPanel=false" target="_blank" href="https://weibo.com/u/6739481217"><i
                  class="iconfont icon-weibo"></i></a>
          <a @click="isShowFollowPanel=false" target="_blank" href="https://m.douban.com/people/206126259"><i
                  class="iconfont icon-douban"></i></a>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "MainNav",
    data() {
      return {
        inputVal: '',
        findCourse: [],
        isShowFollowPanel: false
      }
    },
    computed: {
      ...mapState([
        'isLogin',
        'userName'
      ])
    },
    methods: {
      handleFind() {
        if (this.inputVal) {
          console.log(`查找"${this.inputVal}"相关内容`)
        }
      },
      handleSearch() {
        alert('搜索课程')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../static/scss/constant.scss";
  @import "../../static/scss/mixins.scss";

  #main-nav {
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    height: 70px;
    padding: 30px 0;
    background: $navBGColor;
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;

    .banner-container {
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
            transition: .3s;
            border-radius: 2px;

            &:focus {
              background: $inputFocusBGColor;
            }

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

              div.username {
                font-size: 12px;
                font-weight: 400;
                color: #e6e6b1;
              }

              a {
                text-decoration: none;
                font-size: 12px;
                color: #e6e6b1;
                font-weight: bold;
              }
            }

            /* 关注我们 */
            &:nth-child(4) {
              border-radius: 3px;
              margin-left: 12px;
              background: #e6e6b1;
              border: 1px solid #e6e6b1;
              cursor: pointer;

              a {
                color: white;
              }
            }
          }
        }
      }

      .follow-panel {
        width: 87px;
        line-height: 50px;
        text-align: center;
        position: absolute;
        right: 0;
        top: 50px;
        display: flex;
        justify-content: space-around;

        a {
          text-decoration: none;
          outline: none;

          &:nth-child(1) {
            color: #ff346a;
          }

          &:nth-child(2) {
            color: darkseagreen;
          }

          i {
            font-size: 23px;
          }
        }
      }
    }

  }
</style>