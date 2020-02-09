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
            <div class="course-card">
              <div class="img-cover"><img src="http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg"
                                          alt=""></div>
              <div class="title">0元阅读365本书，3步打造完整知识体系</div>
              <div class="desc">豆瓣BBC纽约时报好书排行 Top365</div>
              <div class="price">免费</div>
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
            <div class="course-card">
              <div class="img-cover"><img src="http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg"
                                          alt=""></div>
              <div class="title">0元阅读365本书，3步打造完整知识体系</div>
              <div class="desc">豆瓣BBC纽约时报好书排行 Top365</div>
              <div class="price">免费</div>
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
            <div class="course-card">
              <div class="img-cover"><img src="http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg"
                                          alt=""></div>
              <div class="title">0元阅读365本书，3步打造完整知识体系</div>
              <div class="desc">豆瓣BBC纽约时报好书排行 Top365</div>
              <div class="price">免费</div>
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
            <div class="course-card">
              <div class="img-cover"><img src="http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg"
                                          alt=""></div>
              <div class="title">0元阅读365本书，3步打造完整知识体系</div>
              <div class="desc">豆瓣BBC纽约时报好书排行 Top365</div>
              <div class="price">免费</div>
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
            <div class="course-card">
              <div class="img-cover"><img src="http://open-image.ws.126.net/0f29929a65e541f795592e44ad3d5aaf.jpg"
                                          alt=""></div>
              <div class="title">0元阅读365本书，3步打造完整知识体系</div>
              <div class="desc">豆瓣BBC纽约时报好书排行 Top365</div>
              <div class="price">免费</div>
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
      ...mapState([])
    },
    methods: {
      ...mapActions([])
    },
    created() {

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

                img {
                  width: 100%;
                  height: 100%;
                  transition: all 0.8s ease;
                }
              }

              .title {
                height: 42px;
                padding: 12px 9px 0;
                font-size: 18px;
                font-weight: 400;
                font-family: "Microsoft YaHei UI", "Arial", "Hiragino Sans GB", 宋体, "Georgia", "serif";
                text-shadow: 0 1px 1px hsla(0, 0%, 100%, .3);
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
  }
</style>