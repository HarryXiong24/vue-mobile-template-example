<template>
  <div class="register">

    <div class="title-container">
      <p>欢迎注册</p>
    </div>

    <mu-container class="form">
      <mu-form ref="form" :model="validateForm" class="mu-demo-form">

        <mu-form-item label="用户名" prop="username" :rules="usernameRules">
          <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
        </mu-form-item>

        <mu-form-item label="密码" prop="password" :rules="passwordRules">
          <mu-text-field v-model="validateForm.password" prop="password" :action-icon="visibility ? 'visibility_off' : 'visibility'" :action-click="() => (visibility = !visibility)" :type="visibility ? 'text' : 'password'"></mu-text-field>
        </mu-form-item>

        <mu-form-item label="确认密码" prop="password" :rules="passwordCheck">
          <mu-text-field type="password" v-model="validateForm.validatePassword" prop="password"></mu-text-field>
        </mu-form-item>

        <mu-form-item prop="isAgree" :rules="argeeRules">
          <mu-checkbox label="同意用户协议" v-model="validateForm.isAgree"></mu-checkbox>
        </mu-form-item>

        <mu-form-item>
          <mu-button color="primary" @click="submit">提交</mu-button>
          <mu-button @click="clear">重置</mu-button>
          <mu-button @click="back">返回登录页</mu-button>
        </mu-form-item>
      </mu-form>
    </mu-container>

    <mu-dialog title="Tip" width="360" :open.sync="alert">
      <p class="alert">{{alertText}}</p>
      <mu-button slot="actions" flat color="red800" @click="closeSimpleDialog">关闭</mu-button>
    </mu-dialog>

    <mu-dialog title="Tip" width="360" :open.sync="info">
      <p class="alert">{{infoText}}</p>
      <mu-button slot="actions" flat color="red800" @click="closeSuccess">回到登录页面</mu-button>
    </mu-dialog>

  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component
export default class Register extends Vue {
  public usernameRules: any = [
    { validate: (val: any) => !!val, message: '必须填写用户名'},
    { validate: (val: any) => val.length >= 3, message: '用户名长度大于3'}
  ]

  public passwordRules: any = [
    { validate: (val: any) => !!val, message: '必须填写密码'},
    { validate: (val: any) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
  ]

  public passwordCheck: any = [
    { validate: (val: any) => !!val, message: '必须确认密码'}
  ]

  public argeeRules: any = [{ validate: (val: any) => !!val, message: '必须同意用户协议'}]
  
  public validateForm: any ={
    username: '',
    password: '',
    validatePassword: '',
    isAgree: false
  }

  private visibility = false

  private alert = false
  private alertText = ''

  private info = false
  private infoText = ''

  async submit () {
    if (this.validateForm.username !== '' && this.validateForm.password !== '' && this.validateForm.validatePassword !== '') 
    {
      if (this.validateForm.isAgree) {
        if (this.validateForm.password === this.validateForm.validatePassword) {
          
          let registerInfo = {
            userName: this.validateForm.username,
            password: this.validateForm.password
          }

          await this.$store.dispatch('register/getRegisterInfo', registerInfo)

          if (this.$store.state.register.registerInfo.success == "true") {
            this.openSuccess('注册成功!')
          } else {
            this.openSimpleDialog('用户名重复!') 
          }

        } else {
          this.openSimpleDialog('两次密码输入不一致!') 
        }
      } else {
        this.openSimpleDialog('请同意用户协议!')
      } 
    } else {
      this.openSimpleDialog('请填写完表格!')
    }
  }

  clear () {
    (this.$refs.form as any).clear();
    this.validateForm = {
      username: '',
      password: '',
      validatePassword: '',
      isAgree: false
    };
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
    this.$router.replace('/')
  }

  back() {
    this.$router.replace('/')
  }

}
</script>

<style lang="scss">
  .register {
    width: 100%;
    .title-container { 
      font-size: 140px;
      color: #2d3a4b;
      margin: 0px auto 200px auto;
      text-align: center;
      font-weight: bold;
    }
    .form {
      width: 90%;
    }
  }
</style>