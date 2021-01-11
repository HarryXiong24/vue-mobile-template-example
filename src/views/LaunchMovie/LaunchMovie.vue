<template>
  <div class="launchMovie">
    <NormalTop title="发布新电影"></NormalTop>

    <div class="subtitle">请按要求填写新电影信息</div>

    <mu-form :model="form" class="form" label-position="top" label-width="100">

      <mu-form-item prop="input" label="发布电影名">
        <mu-text-field v-model="form.movieName"></mu-text-field>
      </mu-form-item>

      <mu-form-item prop="input" label="电影主演">
        <mu-text-field v-model="form.movieActors"></mu-text-field>
      </mu-form-item>

      <mu-form-item prop="input" label="电影简介">
        <mu-text-field v-model="form.movieInfo"></mu-text-field>
      </mu-form-item>

      <mu-form-item prop="textarea" label="电影详情">
        <mu-text-field multi-line :rows="4" :rows-max="6" v-model="form.movieDetail"></mu-text-field>
      </mu-form-item>

      <mu-form-item prop="input" label="发布者代号">
        <mu-text-field v-model="form.adminName"></mu-text-field>
      </mu-form-item>

      <mu-form-item prop="date" label="发布时间">
        <mu-date-input v-model="form.date" type="dateTime" actions></mu-date-input>
      </mu-form-item>

    </mu-form>

    <mu-flex justify-content="center" align-items="center">
      <mu-button round color="success" @click="submit">提交!</mu-button>
    </mu-flex>

    <mu-dialog title="Tip" width="360" :open.sync="alert">
      <p class="alert">{{alertText}}</p>
      <mu-button slot="actions" flat color="red800" @click="closeSimpleDialog">返回</mu-button>
    </mu-dialog>

    <mu-dialog title="Tip" width="360" :open.sync="info">
      <p class="alert">{{infoText}}</p>
      <mu-button slot="actions" flat color="red800" @click="closeSuccess">返回</mu-button>
    </mu-dialog>

  </div>
</template>

<script lang="ts">

import NormalTop from '../../components/NormalTop/NormalTop.vue';
import { Component, Vue } from 'vue-property-decorator';
import MovieComment from '../../components/MovieComment/MovieComment.vue';
import launchMovie from '../../api/launchMovie';

@Component({
  components: {
    NormalTop,
  }
})
export default class LaunchMovie extends Vue {

  public form: any = {
    movieName: '',
    movieActors: '',
    movieInfo: '',
    movieDetail: '',
    adminName: '',
    date: new Date(),
  }

  private alert = false
  private alertText = ''
  private info = false
  private infoText = ''

  public openSimple: boolean = false

  submit() {
    if(this.form.movieName !== '' && this.form.movieActors !== '' && this.form.movieInfo !== ''
    && this.form.movieDetail !== '' && this.form.adminName !== '') {
      let movieForm = {
        movieName: this.form.movieName,
        movieActor: this.form.movieActors,
        movieInfo: this.form.movieInfo,
        movieDetail: this.form.movieDetail,
        moviePoint: Math.floor(Math.random()*10),
        launcher: this.form.adminName
      }

      launchMovie(movieForm)
      this.openSuccess('新电影发布成功!')
    } else {
      this.openSimpleDialog('请填写完整的信息!')
    }
  }

  openSimpleDialog(alertText: string): void {
    this.alert = true
    this.alertText = alertText
  }

  closeSimpleDialog(): void {
    this.alert = false
    this.alertText = ''
  }

  openSuccess(infoText: string): void {
    this.info = true
    this.infoText = infoText
  }

  closeSuccess(): void {
    this.info = false
    this.infoText = ''
    this.$router.back()
  }


}

</script>

<style lang="scss">

  .launchMovie {

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