<template>
  <div id="category-menu">
    <div class="title">
      <i class="iconfont icon-courseware"></i>
      <h3>全部课程</h3>
    </div>
    <div class="item-list">
      <div class="item" v-for="(category,index) in menuCategoryList" :key="index">
        <span class="main-title">{{category.categoryName}}</span>
        <span class="sub-title" v-for="(subCategory, index) in category.categoryItems">
          {{subCategory.title}}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "CategoryMenu",
    computed: {
      ...mapState([
        'menuCategoryList'
      ])
    }
  }
</script>

<style scoped lang="scss">
  @import "../../static/scss/constant";

  #category-menu {
    color: $menuFontColor;
    z-index: 2;
    box-sizing: border-box;
    width: 250px;
    height: 425px;
    background: $menuBGColor;
    position: absolute;
    top: 130px;
    left: 10%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .title {
      height: 52px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      box-sizing: border-box;
      padding: 12px;
      border-bottom: 1px solid whitesmoke;
      width: 100%;

      h3 {

        font-size: 18px;
        font-family: "Microsoft YaHei UI", "Arial", "Hiragino Sans GB", 宋体, "Georgia", "serif";
      }

      i {
        margin-right: 8px;
        font-size: 12px;
      }
    }

    .item {
      height: 50px;
      padding: 12px;
      display: flex;
      flex-direction: row;
      flex-flow: nowrap;
      border-bottom: 1px solid whitesmoke;
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

</style>