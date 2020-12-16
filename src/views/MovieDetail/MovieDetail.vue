<template>
  <div class="movieDetail">
    <NormalTop title="电影详情"></NormalTop>

    <div class="subtitle">电影简介</div>

    <div class="card">
      <mu-card style="width: 100%; max-width: 375px; margin: 0 auto;" raised>
        <mu-card-header title="小猪猪发布" sub-title="2020.12.15">
          <mu-avatar slot="avatar">
            <img src="../../assets/images/logo.png">
          </mu-avatar>
        </mu-card-header>
        <mu-card-media title="金刚川" sub-title="重温热血时代">
          <img src="../../assets/images/logo.png">
        </mu-card-media>
        <mu-card-title title="评分9.2" sub-title="邓超，吴京，张译主演"></mu-card-title>
        <mu-card-text>
          散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
          调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
        </mu-card-text>
        <mu-card-actions class="action">
          <mu-button flat class="button" @click="comment">发布评论</mu-button>
        </mu-card-actions>
      </mu-card>
    </div>

    <mu-list textline="three-line">
      
      <div class="subtitle">影迷评论</div>

      <MovieComment v-for="(list, index) in movieComment" :key="index" :list="list"></MovieComment>

    </mu-list>

  </div>
</template>

<script lang="ts">

import NormalTop from '../../components/NormalTop/NormalTop.vue';
import { Component, Vue } from 'vue-property-decorator';
import MovieComment from '../../components/MovieComment/MovieComment.vue';

@Component({
  components: {
    NormalTop,
    MovieComment
  }
})
export default class MovieDetail extends Vue {

  private messageContent: any = {

  }

  private movieComment: any = [
    {
      name: "爱江山",
      comment: "实在编不下去了,哈哈哈哈哈哈",
      date: "2020.11.5",
      point: 9.4
    },
    {
      name: "爱美人",
      comment: "我们去看电影，最近有部烂片上映，又有吐槽的了",
      date: "2020.11.8",
      point: 9.1
    },
    {
      name: "潇洒还帅呢",
      comment: "哇去实在编不下去，这就是个demo",
      date: "2020.11.8",
      point: 9.4
    },
    {
      name: "LOL",
      comment: "人生苦短，必须性感",
      date: "2020.11.10",
      point: 9.3
    },
  ]

  comment() {
    let CommentId = this.$route.query.MovieId
    this.$router.push(`/Comment?CommentId=${CommentId}`)
  }

  // async getMessageContent() {
  //   let data = {
  //     infoId: this.$route.query.InfoId
  //   }

  //   await this.$store.dispatch('getMessageContent', data)
  //   this.messageContent = this.$store.state.messageContent
  // } 

  // async mounted() {
  //   await this.getMessageContent()
  //   this.chooseIcon()
  // }
}

</script>

<style lang="scss">

  .movieDetail {

    .subtitle {
      margin: 80px 0;
      font-size: 80px;
      &::before {
        content: '';
        border-left: 20px #673ab7 solid;
        padding-left: 30px;
      }
    }

    .card {
      width: 100%; 
      margin: 0 auto;

      .action {
        .button {
          margin-left: 1200px;
        }
      }
    }
  }
</style>