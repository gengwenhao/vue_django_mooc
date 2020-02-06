<template>
  <div id="banner">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in banner" :key="index">
        <a :href="item.url">
          <img :src="item.img" alt="item.title">
        </a>
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
          // autoplay: {
          //   delay: 2500,
          //   disableOnInteraction: false
          // },
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
    position: absolute;
    right: 0;
    box-sizing: border-box;
    height: 425px;
    width: 960px;
    background: #030404;
    z-index: 20;

    .swiper-container {
      height: 425px;

      .swiper-pagination {
        text-align: right;

        .swiper-pagination-bullet {
          margin-right: 11px;
          height: 11px;
          width: 11px;
          background: $bulletBGColor;
          opacity: $bulletOpacity;
          border: 2px solid $bulletBorderColor;
        }

        .swiper-pagination-bullet-active {
          background: $bulletBGActiveColor;
        }
      }
    }

  }
</style>