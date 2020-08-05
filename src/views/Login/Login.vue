<template>
  <div class="login-container">

    <img src="../../assets/logo.png" alt="LoginLogo" class="logo">

    <div class="title-container">
        <p>欢迎使用</p>
    </div>

    <mu-container>
      <mu-form ref="form" :model="validateForm" class="mu-demo-form">
        <mu-form-item icon="account_circle" prop="username" :rules="usernameRules">
          <mu-text-field placeholder="用户名" v-model="validateForm.username" prop="username"></mu-text-field>
        </mu-form-item>
        <mu-form-item  icon="locked" prop="password" :rules="passwordRules">
            <mu-text-field  placeholder="密码" v-model="validateForm.password" prop="password" :action-icon="visibility ? 'visibility_off' : 'visibility'" :action-click="() => (visibility = !visibility)" :type="visibility ? 'text' : 'password'"></mu-text-field>
        </mu-form-item>
        <mu-form-item  icon="code" prop="captcha" :rules="captchaRules">
          <mu-text-field v-model="validateForm.captcha" placeholder="验证码"></mu-text-field>
          <img class="captcha" :src="this.$store.state.captcha.captcha" alt="captcha" @click="changeCaptcha">
        </mu-form-item>
        <mu-form-item>
          <mu-button color="indigo400" @click="submit" round full-width ripple>登录</mu-button>
        </mu-form-item>
      </mu-form>
    </mu-container>
    
    <mu-dialog title="提示" width="360" :open.sync="alert">
      <p class="alert">{{alertText}}</p>
      <mu-button slot="actions" flat color="red800" @click="closeSimpleDialog">关闭</mu-button>
    </mu-dialog>

    <div class="bio-container">
      <p>Copyright © Harry Xiong</p>
    </div>
  
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { ValidateForm } from './constraint'
import { encrypt } from '../../util/crypto'

@Component
export default class Login extends Vue {
  
  private validateForm: ValidateForm = {
    username: 'wjy',
    password: 'rrr123',
    captcha: ''
  }
  private visibility = false
  private alert = false
  private alertText = ''

  data() {
    return {
      usernameRules: [
        { validate: (val: any) => !!val, message: '必须填写用户名'},
        { validate: (val: any) => val.length >= 3, message: '用户名长度大于3'}
      ],
      passwordRules: [
        { validate: (val: any) => !!val, message: '必须填写密码'},
        { validate: (val: any) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
      ],
      captchaRules: [
        { validate: (val: any) => !!val, message: '必须填写验证码'},
      ]
    }
  }

  // 登录验证
  async submit() {
    if (this.validateForm.username !== '' && this.validateForm.password !== '' && this.validateForm.captcha !== '') 
    {
      await this.$store.dispatch('user/getUserInfo', this.validateForm)
      if (this.$store.state.user.userInfo) {
        if (this.$store.state.userInfo.success === true) {
          // 加密sessionStorage
          let token: string = encrypt(this.$store.state.user.userInfo.token)
          let userInfo: string = encrypt(JSON.stringify(this.$store.state.user.userInfo.user))
          // 存入sessionStorage
          sessionStorage.setItem("token", token)
          sessionStorage.setItem("userInfo", userInfo)
          this.$router.replace('/Init')
        } else {
          this.openSimpleDialog(this.$store.state.user.userInfo.msg) 
        }
      } else {
        this.openSimpleDialog('服务器错误!')
      } 
    } else {
      this.openSimpleDialog('信息不能为空!')
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

  async changeCaptcha() {
    await this.$store.dispatch('captcha/getCaptcha')
  }

  mounted() {
    this.changeCaptcha()
  }

}

</script>

<style lang="scss">
  $font:#2d3a4b;
  $bio: #2d3a4bcb;
  $dark_gray:#889aa4;
  $light_gray:#eee;

  .login-container {
    min-height: 100%;
    width: 100%;
    background-color: $light_gray;
    overflow: hidden;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .logo {
      width: 600px;
      height: 400px;
      margin: 280px auto 220px auto;
    }

    .title-container { 
      font-size: 140px;
      color: $font;
      margin: 0px auto 200px auto;
      text-align: center;
      font-weight: bold;
    }

    .mu-demo-form {
      width: 90%;
      margin: 0 auto;
      position: relative;
      .captcha {
        position: absolute;
        bottom: 80px;
        right: -50px;
      }
    }

    .bio-container {
      font-size: 60px;
      color: $bio;
      position: absolute;
      bottom: 10px;
      right: 60px;
    }

    .alert {
      color: $font;
    }
  }
</style>