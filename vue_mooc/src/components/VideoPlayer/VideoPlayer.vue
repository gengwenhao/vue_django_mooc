<template>
  <div id="video-player">
    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>

<script>
  import videojs from 'video.js';
  import 'video.js/dist/video-js.css'

  export default {
    name: "VideoPlayer",
    props: {
      options: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {
        player: null
      }
    },
    mounted() {
      this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady() {

      })
    },
    beforeDestroy() {
      if (this.player) {
        this.player.dispose()
      }
    }
  }
</script>

<style lang="scss">
  #video-player {
    .video-js {
      width: 860px;
      height: 480px;
    }

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
  }
</style>