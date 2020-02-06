<template>
  <div id="banner">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in banner" :key="index">
        <a :href="item.url">
          <img @click.prevent="" @dragover.prevent="" @mousedown.prevent="" :src="item.img" alt="item.title">
        </a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
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
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          loop: true,
          speed: 750
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


    .swiper-button-next {
      transform: rotate(-180deg) translateY(50%);
      transform-origin: 50% 50%;
      background: rgba(0, 0, 0, 0.1) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAABGdBTUEAALGPC/xhBQAAAOBJREFUOBGdlF0LAUEUhjd/gkQSlySSlJT4Hf6xGyVJkrjUks/b9UxZnabm7B6n3pq38z4z0+zsRFHOSpKkjZYoRvNcGMEOOqO04kyQZA+5VWQtVJBkH10kwfiEmkGQ5gBdkawjpqFBQwI3STA+oLoGjQjcPWiPr2nQmMDDg3b4qgZNCDw9aIuvaNCMwMuDNviyBk0JvD1ojS8FIdcg4E5L1gpTVCGahaxAsM/s/23VzfiFbYeTbgXY/jkEbL8AArZfOQHbL7mA7b+VgO0/soC7nLjt6RCw/bEScIuVf8/jB1KbJ/jzvE2uAAAAAElFTkSuQmCC) no-repeat center center;
      margin: 0;
      width: 40px;
      height: 50px;
    }

    .swiper-button-prev {
      border-radius: 2px;
      border: none;
      position: absolute;
      width: 40px;
      height: 50px;
      background: rgba(0, 0, 0, 0.1) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAABGdBTUEAALGPC/xhBQAAAOBJREFUOBGdlF0LAUEUhjd/gkQSlySSlJT4Hf6xGyVJkrjUks/b9UxZnabm7B6n3pq38z4z0+zsRFHOSpKkjZYoRvNcGMEOOqO04kyQZA+5VWQtVJBkH10kwfiEmkGQ5gBdkawjpqFBQwI3STA+oLoGjQjcPWiPr2nQmMDDg3b4qgZNCDw9aIuvaNCMwMuDNviyBk0JvD1ojS8FIdcg4E5L1gpTVCGahaxAsM/s/23VzfiFbYeTbgXY/jkEbL8AArZfOQHbL7mA7b+VgO0/soC7nLjt6RCw/bEScIuVf8/jB1KbJ/jzvE2uAAAAAElFTkSuQmCC) no-repeat center center;
    }

    .swiper-container {
      height: 425px;

      .swiper-pagination {

        .swiper-pagination-bullet {
          height: 11px;
          width: 11px;
          background: $bulletBGColor;
          opacity: $bulletOpacity;
        }

        .swiper-pagination-bullet-active {
          background: $bulletBGActiveColor;
        }
      }
    }

  }
</style>