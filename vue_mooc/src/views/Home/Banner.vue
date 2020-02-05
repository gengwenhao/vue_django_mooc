<template>
  <div id="banner">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in banner" :key="index">
        <div class="slide-wrap">
          <a :href="item.url">
            <img :src="item.img" alt="">
          </a>
          <div class="info">
            <h1 class="title">{{item.title}}</h1>
            <p class="desc">{{item.desc}}</p>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'

  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import {mapState} from 'vuex'

  export default {
    name: "Banner",
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          spaceBetween: 35,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          loop: true,
        }
      }
    },
    computed: {
      ...mapState([
        'banner'
      ])
    }
  }
</script>

<style lang="scss">
  @import "../../static/scss/constant";

  #banner {
    box-sizing: border-box;
    height: 425px;
    width: 100%;
    background: #030404;

    .swiper-container {
      width: 960px;
      height: 425px;
      float: right;

      .slide-wrap {
        float: right;
        width: 960px;
        height: 100%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        .info {
          position: absolute;
          top: 70%;
          transform: translate(-50%, -50%);

          .title {
            color: white;
            font-size: 30px;
            font-family: "Microsoft YaHei UI", "Arial", "Hiragino Sans GB", 宋体, "Georgia", "serif";
          }

          .desc {
            font-size: 14px;
            color: white;
            font-family: "Microsoft YaHei UI", "Arial", "Hiragino Sans GB", 宋体, "Georgia", "serif";
            margin-top: 13px;
          }
        }
      }

      /* 翻页器 */
      .swiper-pagination {
        display: flex;
        justify-content: right;

        .swiper-pagination-bullet {
          width: 11px;
          height: 11px;
          background: $bulletBGColor;
          border: 2px solid $bulletBorderColor;
          opacity: $bulletOpacity;
          margin-right: 12px;
        }

        /* 激活的翻页器小圆点 */
        .swiper-pagination-bullet-active {
          background: $bulletBGActiveColor;
          width: 11px;
          height: 11px;
        }
      }

    }

  }
</style>