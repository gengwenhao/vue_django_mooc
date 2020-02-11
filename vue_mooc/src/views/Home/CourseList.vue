<template>
  <div id="course-list">

    <div class="category-container">
      <div class="container">
        <div class="category-list">
          <h1 class="category-title">
            <i class="iconfont icon-clock"></i>
            今日秒杀
          </h1>
          <div class="course-panel">
            <div v-for="course in homeCourses.JRMS" class="course-card">
              <div class="img-cover"><img :src="course.cover_img" alt=""></div>
              <div class="course-info">
                <div class="title">{{course.title}}</div>
                <div class="sub-title">{{course.sub_title}}</div>
                <div class="price">{{course.price}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="category-container">
      <div class="container">
        <div class="category-list">
          <h1 class="category-title">
            <i class="iconfont icon-jisuanjicomputer160"></i>
            计算机
          </h1>
          <div class="course-panel">
            <div v-for="course in homeCourses.JSJ" class="course-card">
              <div class="img-cover"><img :src="course.cover_img" alt=""></div>
              <div class="course-info">
                <div class="title">{{course.title}}</div>
                <div class="sub-title">{{course.sub_title}}</div>
                <div class="price">{{course.price}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="category-container">
      <div class="container">
        <div class="category-list">
          <h1 class="category-title">
            <i class="iconfont icon-ted"></i>
            TED
          </h1>
          <div class="course-panel">
            <div v-for="course in homeCourses.TED" class="course-card">
              <div class="img-cover"><img :src="course.cover_img" alt=""></div>
              <div class="course-info">
                <div class="title">{{course.title}}</div>
                <div class="sub-title">{{course.sub_title}}</div>
                <div class="price">{{course.price}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="category-container">
      <div class="container">
        <div class="category-list">
          <h1 class="category-title">
            <i class="iconfont icon-shangye-"></i>
            商业财经
          </h1>
          <div class="course-panel">
            <div v-for="course in homeCourses.SYCJ" class="course-card">
              <div class="img-cover"><img :src="course.cover_img" alt=""></div>
              <div class="course-info">
                <div class="title">{{course.title}}</div>
                <div class="sub-title">{{course.sub_title}}</div>
                <div class="price">{{course.price}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="category-container">
      <div class="container">
        <div class="category-list">
          <h1 class="category-title">
            <i class="iconfont icon-shenghuofuwu"></i>
            生活百科
          </h1>
          <div class="course-panel">
            <div v-for="course in homeCourses.SHBK" class="course-card">
              <div class="img-cover"><img :src="course.cover_img" alt=""></div>
              <div class="course-info">
                <div class="title">{{course.title}}</div>
                <div class="sub-title">{{course.sub_title}}</div>
                <div class="price">{{course.price}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    name: "CourseList",
    computed: {
      ...mapState([
        'homeCourses'
      ])
    },
    methods: {
      ...mapActions([
        'updateHomeJRMS',
        'updateHomeJSJ',
        'updateHomeTED',
        'updateHomeSYCJ',
        'updateHomeSHBK'
      ])
    },
    created() {
      this.updateHomeJRMS()
      this.updateHomeJSJ()
      this.updateHomeTED()
      this.updateHomeSYCJ()
      this.updateHomeSHBK()
    }
  }
</script>

<style scoped lang="scss">
  @import "../../static/scss/mixins";

  #course-list {
    user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    box-sizing: border-box;
    margin-top: 40px;
    padding-bottom: 170px;
    width: 100%;

    .category-container {
      width: 100%;

      &:nth-child(2n) {
        background: #f5f5f5;

        .category-title {
          color: goldenrod !important;
        }

        .price {
          color: goldenrod !important;
        }
      }

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
            text-indent: 12px;
            color: $categoryTitleColor;
            font-size: 25px;
            font-weight: 400;
            font-family: "Microsoft YaHei UI", "Arial", "Hiragino Sans GB", 宋体, "Georgia", "serif";
            margin-bottom: 25px;

            i.iconfont {
              font-size: 32px;
            }
          }

          /* 课程列表 */
          .course-panel {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-around;

            /* 课程详情 */
            .course-card {
              border-radius: 5px;
              cursor: pointer;
              width: 260px;
              height: 300px;
              background: $courseDetailBGColor;
              margin-bottom: 25px;
              box-shadow: 0 2px 2px rgba(black, .07);
              transition: .5s;

              &:hover {
                box-shadow: 0 0 9px 5px rgba(black, .07);

                img {
                  transform: scale(1.08);
                  opacity: .9;
                }
              }

              .img-cover {
                width: 260px;
                height: 150px;
                overflow: hidden;
                text-align: center;

                img {
                  display: inline-block;
                  width: 100%;
                  height: 100%;
                  transition: all 0.8s ease;
                }
              }

              .course-info {
                padding: 12px;
                position: relative;
                height: 110px;

                .title {
                  color: #333;
                  max-height: 42px;
                  font-size: 18px;
                  line-height: 1.25;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  text-align: left;
                  font-family: 'Microsoft YaHei UI', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
                }

                .sub-title {
                  position: relative;
                  margin-top: .75em;
                  overflow: hidden;
                  color: #999;
                  font-size: 14px;
                  white-space: nowrap;
                  text-overflow: ellipsis;
                  font-family: 'Microsoft YaHei UI', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
                }

                .price {
                  position: absolute;
                  bottom: 14px;
                  font-size: 18px;
                  color: #ff746d;
                  font-weight: 500;
                  font-family: 'Microsoft YaHei UI', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
                }
              }
            }
          }
        }
      }
    }
  }
</style>