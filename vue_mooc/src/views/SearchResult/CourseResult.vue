<template>
  <div id="course-result">
    <div class="container">
      <el-page-header @back="handleGoBack" title="回到主页" :content="pageTitle">
      </el-page-header>

      <!--   显示课程   -->
      <div class="inner" v-if="searchResult.count > 0">
        <div class="course-list">
          <div v-for="course in searchResult.results" class="course-line">
            <div class="img-cover">
              <img :src="course.cover_img" :alt="course.desc">
            </div>
            <div class="course-detail">
              <h1 class="course-title">{{course.title}}</h1>
              <div class="teacher-list">
                讲师:
                <span v-for="teacher in course.teachers" class="teacher">
                  {{teacher.name}}
                </span>
                <span v-if="course.teachers.length === 0">暂无</span>
              </div>
              <div class="desc">
                {{course.desc}}
              </div>
              <div class="price">价格： <span>{{course.price}}</span></div>
            </div>
          </div>
        </div>
        <el-pagination
                class="pagination"
                background
                layout="prev, pager, next"
                :page-size="10"
                :current-page="currentPage"
                @current-change="handleCurrentChange"
                :total="searchResult.count">
        </el-pagination>
      </div>

      <!--   未找到相关课程   -->
      <div class="inner not-found" v-else="searchResult.count > 0">
        <i class="iconfont icon-apptubiao-"></i>
        <span>没有满足条件的内容</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {getCourse} from '../../api/api'

  export default {
    name: "CourseResult",
    data() {
      return {
        searchResult: {"count": 0, "next": null, "previous": null, "results": []},
        currentPage: 1
      }
    },
    watch: {
      '$route': function (to, from) {
        this.currentPage = 1
        getCourse({search: this.searchKey, page: this.currentPage})
          .then(resp => {
            this.searchResult.count = resp.data.count
            this.searchResult.next = resp.data.next
            this.searchResult.previous = resp.data.previous
            this.searchResult.results = resp.data.results
          })
      }
    },
    methods: {
      handleCurrentChange(val) {
        this.currentPage = val
        getCourse({search: this.searchKey, page: this.currentPage})
          .then(resp => {
            this.searchResult.count = resp.data.count
            this.searchResult.next = resp.data.next
            this.searchResult.previous = resp.data.previous
            this.searchResult.results = resp.data.results
          })
      },
      handleGoBack() {
        this.$router.push('/')
      }
    },
    computed: {
      searchKey() {
        return this.$route.params.searchKey
      },
      pageTitle() {
        if (this.searchResult.count !== 0) {
          return `找到如下 “${this.searchKey}” 相关内容（${this.searchResult.count}条）`
        } else {
          return `未找到 ”${this.searchKey}“ 相关内容`
        }
      }
    },
    created() {
      getCourse({search: this.searchKey})
        .then(resp => {
          this.searchResult.count = resp.data.count
          this.searchResult.next = resp.data.next
          this.searchResult.previous = resp.data.previous
          this.searchResult.results = resp.data.results
        })
    }
  }
</script>

<style lang="scss">
  @import "../../static/scss/constant";
  @import "../../static/scss/mixins";

  #course-result {
    position: relative;
    padding-bottom: 250px;

    .container {
      @include flexContainer;
      flex-direction: column;

      .inner {
        width: 100%;
        margin-top: 50px;

        /* 未找到 */
        &.not-found {
          text-align: center;
          font-size: 23px;
          font-weight: 400;
          font-family: "Microsoft YaHei UI", "Arial", "Hiragino Sans GB", 宋体, "Georgia", "serif";
          color: #555;

          i {
            font-size: 150px;
            color: #c0c0c0;
          }

          span {
            display: block;
            margin-top: 15px;
          }
        }


        .course-list {
          width: 100%;
          padding: 12px;
          background: rgba(white, .2);
          display: flex;
          flex-direction: column;

          /* 课程 */
          .course-line {
            cursor: pointer;
            border: 1px solid rgba(248, 248, 248, 0.25);
            border-radius: 3px;
            height: 140px;
            padding: 20px 14px;
            margin: 14px;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            background: rgba(white, .8);

            .img-cover {
              width: 260px;
              height: 150px;
              overflow: hidden;
              border-radius: 2px;

              img {
                width: 100%;
                height: 100%;
              }
            }

            .course-detail {
              padding: 25px 12px;
              height: 140px;
              width: 320px;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              position: relative;

              .course-title {
                font-family: "Microsoft YaHei UI", "Arial", "Hiragino Sans GB", 宋体, "Georgia", "serif";
                color: #222;
                overflow: hidden;
                font-size: 19px;
                max-height: 50px;
              }

              .teacher-list {
                width: 100%;
                overflow: hidden;
                color: #c2c290;
                height: 30px;
                line-height: 30px;
                font-size: 13px;
                font-family: "Microsoft YaHei UI", "Arial", "Hiragino Sans GB", 宋体, "Georgia", "serif";
              }

              .desc {
                width: 100%;
                overflow: hidden;
                height: 40px;
                font-size: 12px;
                font-weight: 400;
                color: #a8a87c;
                font-family: "Microsoft YaHei UI", "Arial", "Hiragino Sans GB", 宋体, "Georgia", "serif";
              }

              .price {
                position: absolute;
                bottom: 20px;
                font-size: 23px;
                color: #222;
                font-weight: bold;

                span {
                  color: #ff3d0c;
                }
              }
            }
          }
        }

        /* 分页器 */
        .pagination {
          margin-top: 50px;

          li.number {
            &:hover {
              color: #E6E6B1;
            }
          }

          li.number.active {
            background: #E6E6B1 !important;

            &:hover {
              color: white;
            }
          }
        }
      }
    }
  }
</style>