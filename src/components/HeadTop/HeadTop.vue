<template>
  <mu-appbar style="width: 100%;" color="#1a1a1a" class="topBar">
    <mu-menu slot="left">
      <mu-button icon class="icon">
        <mu-icon value="home"></mu-icon>
      </mu-button>
      <mu-list slot="content">
        <mu-list-item button @click="goUserInfo">
          <mu-list-item-content>
            <mu-list-item-title>账号信息</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
        <mu-list-item button @click="logout">
          <mu-list-item-content>
            <mu-list-item-title>退出登录</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
    </mu-menu>
    <div slot="default" class="title">
      <div>{{title}}</div>
      <div>{{time}}</div>
    </div>
  </mu-appbar>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component
export default class HeadTop extends Vue {
  @Prop(String) private title!: string
  private time: string = ''

  logout(): void {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('userInfo')
    this.$router.push('/')
  }
  
  goUserInfo(): void {
    this.$router.push('/UserInfo')
  }

  mounted () {
   
  }
}
</script>

<style lang="scss">
  .topBar {
    .title {
      font-size: 70px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .icon {
      margin-top: 20px;
    }
  }
</style>