<template>
  <div id="course-panel">
    <div class="container">

      <!--  类别   -->
      <div v-for="category in categoryList" class="category-list">

        <!--    类别标题    -->
        <h1 class="category-title">{{category.categoryTitle}}</h1>

        <!--   课程列表    -->
        <div class="course-list">
          <div v-for="course in category.courseList" class="course-detail">
            <div class="img-cover">
              <img :src="course.img" alt="">
            </div>
            <div class="title">{{course.title}}</div>
            <div class="desc">{{course.desc}}</div>
            <div class="price">{{course.price}}</div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: "CoursePanel",
    computed: {
      ...mapState([
        'categoryList'
      ])
    }
  }
</script>

<style scoped lang="scss">
  @import "../../static/scss/mixins";

  #course-panel {
    box-sizing: border-box;
    margin-top: 40px;
    width: 100%;

    .container {
      @include flexContainer;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      /* 类别 */
      .category-list {
        margin-top: 40px;
        margin-bottom: 20px;
        width: 100%;

        /* 类别标题 */
        .category-title {
          font-size: 25px;
          font-weight: 400;
          font-family: "Microsoft YaHei UI", "Arial", "Hiragino Sans GB", 宋体, "Georgia", "serif";
          margin-bottom: 25px;
        }

        /* 课程列表 */
        .course-list {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: space-around;

          /* 课程详情 */
          .course-detail {
            border-radius: 2px;
            cursor: pointer;
            width: 260px;
            height: 300px;
            background: $courseDetailBGColor;
            margin-bottom: 25px;
            box-shadow: 0 2px 2px rgba(black, .07);
            transition: .5s;

            &:hover {
              box-shadow: 0 0 9px 5px rgba(black, .07);
            }

            .img-cover {
              width: 260px;
              height: 150px;

              img {
                width: 100%;
                height: 100%;
              }
            }

            .title {
              height: 42px;
              padding: 12px 9px 0;
              font-size: 18px;
              font-weight: 400;
              font-family: "Microsoft YaHei UI", "Arial", "Hiragino Sans GB", 宋体, "Georgia", "serif";
            }

            .desc {
              padding: 0 9px;
              position: relative;
              margin-top: .75em;
              overflow: hidden;
              color: #999;
              font-size: 14px;
              white-space: nowrap;
              text-overflow: ellipsis;
              font-family: "Microsoft YaHei UI", "Arial", "Hiragino Sans GB", 宋体, "Georgia", "serif";
            }

            .price {
              padding: 23px 9px;
              font-size: 18px;
              color: #ff746d;
              font-weight: 500;
              font-family: "Microsoft YaHei UI", "Arial", "Hiragino Sans GB", 宋体, "Georgia", "serif";
            }
          }
        }


      }
    }
  }
</style>