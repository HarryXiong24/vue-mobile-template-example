<template>
  <div class="PageB">

    <p class="subTitle1">国内大片推荐榜</p>

    <mu-list textline="two-line">
      <MovieList v-for="(list, index) in movieList" :key=index :list="list"></MovieList>
    </mu-list>
  </div>
</template>

<script lang="ts">

import MovieList from '../../components/MovieList/MovieList.vue';
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    MovieList
  }
})
export default class PageB extends Vue {
  
  public movieList: any = [
    {
      movieID: 1,
      movieName: "金刚川",
      movieActors: "邓超、吴京、张译主演",
      movieInfo: "让你重温那个激荡磅礴的岁月",
      moviePoint: 9.2,
    },
    {
      movieID: 1,
      movieName: "金刚川",
      movieActors: "邓超、吴京、张译主演",
      movieInfo: "让你重温那个激荡磅礴的岁月",
      moviePoint: 9.2,
    },
    {
      movieID: 1,
      movieName: "金刚川",
      movieActors: "邓超、吴京、张译主演",
      movieInfo: "让你重温那个激荡磅礴的岁月",
      moviePoint: 9.2,
    },
    {
      movieID: 1,
      movieName: "金刚川",
      movieActors: "邓超、吴京、张译主演",
      movieInfo: "让你重温那个激荡磅礴的岁月",
      moviePoint: 9.2,
    },
    {
      movieID: 1,
      movieName: "金刚川",
      movieActors: "邓超、吴京、张译主演",
      movieInfo: "让你重温那个激荡磅礴的岁月",
      moviePoint: 9.2,
    },
    {
      movieID: 1,
      movieName: "金刚川",
      movieActors: "邓超、吴京、张译主演",
      movieInfo: "让你重温那个激荡磅礴的岁月",
      moviePoint: 9.2,
    },
    {
      movieID: 1,
      movieName: "金刚川",
      movieActors: "邓超、吴京、张译主演",
      movieInfo: "让你重温那个激荡磅礴的岁月",
      moviePoint: 9.2,
    },
    {
      movieID: 1,
      movieName: "金刚川",
      movieActors: "邓超、吴京、张译主演",
      movieInfo: "让你重温那个激荡磅礴的岁月",
      moviePoint: 9.2,
    },
    {
      movieID: 1,
      movieName: "金刚川",
      movieActors: "邓超、吴京、张译主演",
      movieInfo: "让你重温那个激荡磅礴的岁月",
      moviePoint: 9.2,
    },
  ]
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

  }
</style>