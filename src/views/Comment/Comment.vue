<template>
  <div class="comment">
    <NormalTop title="发布评论"></NormalTop>

    <div class="subtitle">说出你对本电影的评价</div>

    <mu-form :model="form" class="form" label-position="top" label-width="100">

      <mu-form-item prop="textarea" label="你想说什么">
        <mu-text-field multi-line :rows="4" :rows-max="6" v-model="form.textarea"></mu-text-field>
      </mu-form-item>

      <mu-form-item prop="slider" label="给出你的打分">
        <mu-slider v-model="form.slider" color="secondary" :max="10"></mu-slider>
      </mu-form-item>

      <mu-form-item prop="checkbox" label="总体感觉">
        <mu-checkbox v-model="form.checkbox" value="eat" label="剧情good"></mu-checkbox>
        <mu-checkbox v-model="form.checkbox" value="sleep" label="演员good"></mu-checkbox>
        <mu-checkbox v-model="form.checkbox" value="run" label="观影感nice"></mu-checkbox>
      </mu-form-item>

      <mu-form-item prop="date" label="评论时间">
        <mu-date-input v-model="form.date" type="dateTime" actions></mu-date-input>
      </mu-form-item>

      <mu-form-item prop="value" label="是否给个赞">
        <mu-checkbox v-model="form.value" uncheck-icon="favorite_border" checked-icon="favorite" label="好评+1"></mu-checkbox>
      </mu-form-item>

    </mu-form>

    <mu-flex justify-content="center" align-items="center">
      <mu-button round color="success" @click="submit">提交!</mu-button>
    </mu-flex>

    <mu-dialog title="Tip" width="360" :open.sync="openSimple">
      提交成功!感谢您宝贵的评价!
      <mu-button slot="actions" flat color="primary" @click="closeSimpleDialog">返回</mu-button>
    </mu-dialog>

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
export default class Comment extends Vue {
      
  public form: any = {
    date: new Date(),
    checkbox: [],
    slider: 3,
    textarea: '',
    value: false
  }

  public openSimple: boolean = false

  submit() {
    this.openSimpleDialog()
  }

  openSimpleDialog () {
    this.openSimple = true
  }

  closeSimpleDialog () {
    this.openSimple = false
    this.$router.back()
  }

}

</script>

<style lang="scss">

  .comment {

    .subtitle {
      margin: 80px 0;
      font-size: 80px;
      &::before {
        content: '';
        border-left: 20px #673ab7 solid;
        padding-left: 30px;
      }
    }

    .form {
      width: 90%;
      margin: 0 auto;
    }
  }
</style>
