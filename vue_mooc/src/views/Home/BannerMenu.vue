<template>
  <div id="banner-menu">
    <div class="item-list">
      <div class="item" v-for="(category,index) in bannerMenu" :key="index">
        <span class="main-title">{{category.title}}</span>
        <span class="sub-title" v-for="(subCategory, index) in category.category">
          {{subCategory.title}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    name: "BannerMenu",
    computed: {
      ...mapState([
        'bannerMenu'
      ])
    },
    methods: {
      ...mapActions([
        'updateBannerMenu'
      ])
    },
    created() {
      this.updateBannerMenu()
    }
  }
</script>

<style scoped lang="scss">
  @import "../../static/scss/constant";

  #banner-menu {
    user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -moz-user-select: none;
    float: left;
    color: $menuFontColor;
    z-index: 2;
    box-sizing: border-box;
    width: 250px;
    height: 425px;
    background: $menuBGColor;

    .item-list {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .item {
        height: 30px;
        padding: 12px;
        display: flex;
        flex-direction: row;
        flex-flow: nowrap;
        justify-content: flex-start;
        align-items: center;
        font-family: "Microsoft YaHei UI", "Arial", "Hiragino Sans GB", 宋体, "Georgia", "serif";

        &:hover {
          background: #e0e0a4;
        }

        .main-title, .sub-title {
          cursor: pointer;
        }

        .main-title {
          font-size: 23px;
          margin-right: 9px;
          font-weight: bold;
        }

        .sub-title {
          font-size: 13px;
          margin-right: 8px;

          &:hover {
            text-decoration: underline;
            transition: 1s;
          }
        }
      }
    }
  }

</style>