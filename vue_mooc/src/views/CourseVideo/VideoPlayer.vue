<template>
  <div id="video-player">
    <div class="video-box">
      <div class="inner">
        <el-breadcrumb class="bread" separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">小耿课堂</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ name: 'fullCourse', params:{courseID}}">{{courses.currentCourse.title}}
          </el-breadcrumb-item>
        </el-breadcrumb>
        <div class="player">
          <video id="myVideo" class="video-js">
            <source :src="videoURL" type="video/mp4">
          </video>
          <div class="play-list">
            <h3>选集</h3>
            <div class="list">
              <el-collapse accordion>
                <el-collapse-item
                        :title="chapter.title"
                        :key="chapter.id"
                        v-for="chapter in courses.currentCourse.chapter">
                  <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                  <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                </el-collapse-item>
              </el-collapse>
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
    name: "VideoPlayer",
    mounted() {
      this.initVideo()
    },
    methods: {
      initVideo() {
        //初始化视频方法
        let myPlayer = this.$video(myVideo, {
          //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
          controls: true,
          //自动播放属性,muted:静音播放
          // autoplay: "muted",
          // autoplay: "play",
          //建议浏览器是否应在<video>加载元素后立即开始下载视频数据。
          preload: "auto",
          //设置视频播放器的显示宽度（以像素为单位）
          width: "860px",
          //设置视频播放器的显示高度（以像素为单位）
          height: "480px"
        })
      }
    },
    watch: {
      '$route': function (to, from) {
        getFullCourse(this.courseID)
          .then(resp => {
            this.$set(this.courses, 'currentCourse', resp.data)
          })
          .catch(error => {
            this.$router.push({name: '404', params: {next: this.$route.path}})
          })
      }
    },
    computed: {
      courseID() {
        return this.$route.params.courseID
      },
      chapterID() {
        return this.$route.params.chapterID
      },
      lessonID() {
        return this.$route.params.lessonID
      }
    },
    data() {
      return {
        courses: {
          currentCourse: {}
        }
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

<style lang="scss">
  @import "../../static/scss/mixins";

  #video-player {
    padding-top: 130px;
    min-height: 650px;
    background: #f8f8f8;

    /* 播放器按钮 */
    .vjs-big-play-button {
      position: absolute;
      border-color: #ff1b1b;
      background: #ff1b1b;
      color: white;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .video-box {
      height: 600px;
      background: rgba(34, 34, 34, 0.89);

      .inner {
        @include flexContainer;
        height: 700px;
        flex-direction: column;

        /* 面包屑 */
        .bread {
          padding: 30px 0;
          color: white;

          span {
            color: white;
          }
        }

        .player {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          width: 100%;

          #myVideo {

            video {
              width: 860px;
              height: 480px;
            }
          }

          .play-list {
            background: rgba(51, 51, 51, 0.8);
            height: 480px;
            width: 300px;
            user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            -webkit-user-select: none;

            h3 {
              font-family: 'Microsoft YaHei UI', 'Microsoft YaHei', Helvetica, Arial, sans-serif;
              font-size: 21px;
              color: white;
              font-weight: 400;
              height: 70px;
              line-height: 70px;
              text-indent: 10px;
            }

            .list {
              overflow-y: scroll;
              overflow-x: hidden;
              box-sizing: border-box;
              padding: 0 10px;
              height: 380px;
              width: 300px;

              /* 课程目录折叠条 */
              .el-collapse {
                background: #3b3b3b;

                .el-collapse-item__header {
                  background: #3b3b3b;
                  text-indent: 8px;
                  color: #cccc99;
                }

                .el-collapse-item__content {
                  background: #3b3b3b;
                  color: #cccc99;
                }
              }


            }
          }


        }


      }
    }
  }
</style>