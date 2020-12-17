<template>
  <div class="PageB">

    <p class="subTitle1">大片Top榜</p>

    <mu-grid-list class="gridlist" :cols="3">
      <mu-grid-tile v-for="(tile, index) in topList" :key="index">
        <img :src="tile.image" >
        <span slot="title">{{tile.title}}</span>
        <span slot="subTitle">by <b>{{tile.author}}</b></span>
        <mu-button slot="action" icon>
          <mu-icon value="star_border"></mu-icon>
        </mu-button>
      </mu-grid-tile>
    </mu-grid-list>

    <p class="subTitle1">大片列表</p>

    <mu-list textline="two-line">
      <MovieList v-for="(list, index) in movieList" :key=index :list="list"></MovieList>
    </mu-list>
  </div>
</template>

<script lang="ts">

import P1 from '../../assets/images/grid/1.jpg';
import P2 from '../../assets/images/grid/2.jpg';
import P3 from '../../assets/images/grid/3.jpg';
import P4 from '../../assets/images/grid/4.jpg';
import P5 from '../../assets/images/grid/5.jpg';
import P6 from '../../assets/images/grid/5.jpg';

import MovieList from '../../components/MovieList/MovieList.vue';
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    MovieList
  }
})
export default class PageB extends Vue {

  public topList: any = [{
    image: P1,
    title: 'Breakfast',
    author: 'Myron'
  }, {
    image: P2,
    title: 'Burger',
    author: 'Linyu'
  }, {
    image: P3,
    title: 'Camera',
    author: 'ruolin'
  }, {
    image: P4,
    title: 'Hats',
    author: 'kakali'
  }, {
    image: P5,
    title: 'Honey',
    author: 'yuyang'
  }, {
    image: P6,
    title: 'Morning',
    author: 'mokayi'
  }]
  
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

    .grid { 
      width: 360px;
      height: 450px;
      overflow-y: auto;
    }

  }
</style>