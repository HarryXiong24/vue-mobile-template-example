<template>
  <div class="PageB">

    <p class="subTitle1">大片Top榜</p>

      <mu-carousel transition="fade" interval="2000" class="carousel">

        <mu-icon value="navigate_before" slot="left"></mu-icon>
        <mu-icon value="navigate_next" slot="right"></mu-icon>
        <template slot="indicator" slot-scope="{ index, active }">
          <mu-button icon class="mu-carousel-indicator-button" :class="{'mu-carousel-indicator-button__active': active}" @click="changeActive(index)">
            <span class="rect-indicator"></span>
          </mu-button>
        </template>

        <mu-carousel-item class="item">
          <img :src="carouselImg1" class="img">
        </mu-carousel-item>
        <mu-carousel-item class="item">
          <img :src="carouselImg2" class="img">
        </mu-carousel-item>
        <mu-carousel-item class="item">
          <img :src="carouselImg3" class="img">
        </mu-carousel-item>
        <mu-carousel-item class="item">
          <img :src="carouselImg4" class="img">
        </mu-carousel-item>
        <mu-carousel-item class="item">
          <img :src="carouselImg5" class="img">
        </mu-carousel-item>
      </mu-carousel>

    <p class="subTitle1">大片列表</p>

    <mu-list textline="two-line">
      <MovieList v-for="(list, index) in movieList" :key=index :list="list"></MovieList>
    </mu-list>
  </div>
</template>

<script lang="ts">

import carouselImg1 from '../../assets/images/post/1.jpg';
import carouselImg2 from '../../assets/images/post/2.jpg';
import carouselImg3 from '../../assets/images/post/3.jpg';
import carouselImg4 from '../../assets/images/post/4.jpg';
import carouselImg5 from '../../assets/images/post/5.jpg';

import MovieList from '../../components/MovieList/MovieList.vue';
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    MovieList
  }
})
export default class PageB extends Vue {

  public carouselImg1: any = carouselImg1
  public carouselImg2: any = carouselImg2
  public carouselImg3: any = carouselImg3
  public carouselImg4: any = carouselImg4
  public carouselImg5: any = carouselImg5

  public movieList: any = []

  async getList() {
    await this.$store.dispatch('movieInfo/getMovieList')
    this.movieList = this.$store.state.movieInfo.movieList
  }

  mounted() {
    this.getList() 
  }
}
</script>

<style lang="scss">
  .PageB {
    width: 100%;
    
    .subTitle1 {
      margin: 80px 0;
      font-size: 80px;
      &::before {
        content: '';
        border-left: 20px #673ab7 solid;
        padding-left: 30px;
      }
    }
    
    .carousel {
      height: 1200px;
      width: 100%;
      .item {
        .img {
          height: 1200px;
          width: 100%;
        }
      }
    }

    .grid { 
      width: 360px;
      height: 450px;
      overflow-y: auto;
    }

  }
</style>