<template>
  <mu-menu class="menu">
    <mu-button icon class="icon" @click="open = !open">
      <mu-icon value="menu" size="30"></mu-icon>
    </mu-button>

    <mu-drawer class="drawer" width="76%" :open.sync="open" :docked="docked">

      <mu-card class="card">
        <mu-card-header title="Harry">
          <mu-avatar slot="avatar" size="50">
            <img src="../../assets/images/logo.png">
          </mu-avatar>
        </mu-card-header>
      </mu-card>

      <mu-list class="list">
        <mu-list-item button>
          <mu-list-item-action>
            <mu-icon value="inbox"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Demo1</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-action>
            <mu-icon value="grade"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Demo2</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-action>
            <mu-icon value="send"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Demo3</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-action>
            <mu-icon value="drafts"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-title>Demo4</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button @click="logout">
          <mu-list-item-action>
            <mu-icon value="reply"></mu-icon>
          </mu-list-item-action>
          <mu-list-item-content>
            <mu-list-item-title>Logout</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>

      <mu-row class="bottom">
        <mu-button flat color="amber800" @click="goSetting">Setting</mu-button>
        <mu-button flat color="amber800" @click="open = false">Close</mu-button>
      </mu-row>

    </mu-drawer>
  </mu-menu>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component
export default class SideBar extends Vue {
  private open: boolean = false;
  private docked: boolean = false

  logout(): void {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('userInfo')
    this.$router.push('/')
  }

  goSetting(): void {
    this.$router.push('/Setting')
  }
}
</script>

<style lang="scss">
  .menu {
    .drawer {
      .card {
        background-color: #673ab7;
        width: 100%;
        .mu-card-title {
          font-size: 100px;
          margin-top: 100px;
          color: white;
        }
      }
      .bottom {
        position: absolute;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    }
  }
</style>