<template>
  <div id="course-detail">
    <div class="container">
      <div class="course-common-detail">
        <div @click="handleBtnGoClick" class="img-cover">
          <img @mousedown.prevent="" :src="courses.currentCourse.cover_img" alt="">
        </div>
        <div class="desc">
          <div class="info">
            <h2 class="title">{{courses.currentCourse.title}}</h2>
            <div class="sub-title">{{courses.currentCourse.sub_title}}</div>
            <div class="tag-list">
              <div :key="tag.id" v-for="tag in courses.currentCourse.tag" class="tag">{{tag.name}}</div>
            </div>
            <div class="teacher-list">
              主讲教师：
              <div :key="teacher.id" v-for="teacher in courses.currentCourse.teachers" class="teacher">{{teacher.name}}
              </div>
              <div class="teacher" v-if="courses.currentCourse.teachers&&courses.currentCourse.teachers.length===0">暂无
              </div>
            </div>
          </div>
          <div @click="handleBtnGoClick" class="btn-go">开始学习</div>
        </div>
      </div>
      <div class="course-content">
        <div class="title">
          <span @click="isShowDesc=true" :class="{active:isShowDesc}">课程介绍</span>
          <span @click="isShowDesc=false" :class="{active: !isShowDesc}">目录</span>
        </div>
        <div class="content">
          <div v-show="isShowDesc" v-html="courses.currentCourse.h5_desc" class="h5-container"></div>
          <div v-show="!isShowDesc">
            <div :key="chapter.id" v-for="chapter in courses.currentCourse.chapter" class="chapter">
              <div class="chapter-title"><i style="margin-right: 5px;" class="iconfont icon-Menu"></i> {{chapter.title}}
              </div>
              <el-steps :space="35" class="lesson" direction="vertical">
                <el-step style="margin-left: 15px;" class="lesson-item" v-for="lesson in chapter.lesson"
                         @click.native="handleToPlay(lesson.id)"
                         :title="lesson.title"></el-step>
              </el-steps>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getFullCourse} from '../../api/api'

  export default {
    name: "CourseDetail",
    methods: {
      handleToPlay(lessonID) {
        alert(lessonID)
      },
      handleBtnGoClick() {
        let lessonID = this.courses.currentCourse.chapter[0].lesson[0].id
        this.handleToPlay(lessonID)
      }
    },
    watch: {
      '$route': function (to, from) {
        this.currentPage = 1
        getFullCourse(this.courseID)
          .then(resp => {
          })
          .catch(error => {
            this.$router.push({name: '404', params: {next: this.$router.path}})
          })
      }
    },
    computed: {
      courseID() {
        return this.$route.params.courseID
      }
    },
    data() {
      return {
        courses: {
          currentCourse: {}
        },
        isShowDesc: true
      }
    },
    created() {
      getFullCourse(this.courseID)
        .then(resp => {
          this.$set(this.courses, 'currentCourse', resp.data)
        })
        .catch(error => {
          this.$router.push({name: '404', params: {next: this.$route.path}})
        })
    }
  }
</script>

<style scoped lang="scss">
  @import "../../static/scss/mixins";

  #course-detail {
    .container {
      @include container;
      padding-top: 25px;

      /* 课程封面 */
      .course-common-detail {
        background: rgba(white, .9);
        padding: 25px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        .img-cover {
          width: 480px;
          height: 270px;
          overflow: hidden;
          text-align: center;
          opacity: .9;
          transition: all .7s ease;
          cursor: pointer;

          &:hover {
            opacity: 1;
          }

          img {
            display: inline-block;
            width: 100%;
            height: 100%;
          }
        }

        .desc {
          padding-left: 43px;
          width: 480px;
          height: 270px;
          background: rgba(white, .6);
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          .info {
            height: 131px;

            .title {
              color: #313131;
              font-size: 22px;
              line-height: 22px;
              overflow: hidden;
              font-family: 'Microsoft YaHei UI', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
            }

            .sub-title {
              color: #444;
              font-size: 14px;
              line-height: 35px;
              overflow: hidden;
              font-family: 'Microsoft YaHei UI', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
            }

            .tag-list {
              height: 54px;
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-items: center;
              flex-wrap: wrap;
              overflow: hidden;

              .tag {
                box-sizing: border-box;
                height: 25px;
                margin-right: 5px;
                margin-bottom: 2px;
                border-radius: 2px;
                display: inline-block;
                border: 1px solid #a9a979;
                padding: 4px 6px;
                background: transparent;
                color: #a9a979;
              }
            }

            .teacher-list {
              color: #444;
              font-size: 13px;
              height: 23px;
              line-height: 23px;
              overflow: hidden;

              .teacher {
                display: inline-block;
              }
            }
          }

          .btn-go {
            font-family: 'Microsoft YaHei UI', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
            font-weight: lighter;
            font-size: 20px;
            cursor: pointer;
            width: 250px;
            height: 35px;
            line-height: 35px;
            text-align: center;
            color: white;
            background: rgba(97, 97, 71, 0.83);
            border-radius: 4px;
            padding: 4px 16px;
            opacity: .9;
            transition: .4s;

            &:hover {
              opacity: 1;

            }
          }
        }

      }

      /* 课程介绍和目录 */
      .course-content {
        margin-top: 20px;
        background: rgba(white, .9);
        padding: 25px;

        .title {
          padding-bottom: 8px;
          border-bottom: 1px solid #E6E6B1;

          span {
            padding: 0 5px;
            cursor: pointer;
            user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            -moz-user-select: none;
            margin-right: 20px;
            font-size: 21px;
            font-family: 'Microsoft YaHei UI', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
            font-weight: normal;
            color: #444;

            &.active {
              color: #ff346a;
              font-weight: 400;
              padding-bottom: 5px;
              border-bottom: 2px solid #ff346a;
            }
          }
        }

        .content {
          margin-top: 23px;
          min-height: 250px;

          .chapter {
            .chapter-title {
              font-size: 18px;
              font-weight: bold;
              font-family: 'Microsoft YaHei UI', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
              color: #808062;
              background: rgba(231, 231, 231, 0.61);
              padding: 16px;
              margin-bottom: 12px;
              margin-top: 12px;
            }


            .lesson {

              .lesson-item {
                cursor: pointer;
                margin-right: 12px;
              }
            }
          }
        }
      }
    }
  }
</style>