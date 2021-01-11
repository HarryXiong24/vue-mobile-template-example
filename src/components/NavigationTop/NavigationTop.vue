<template>
  <mu-appbar style="width: 100%;" color="#673ab7" class="topBar">
  
    <SideBar slot="left"></SideBar>

    <div slot="default" class="title">
      <div>{{title}}</div>
    </div>

    <mu-menu slot="right" placement="bottom-end" :open.sync="add">
      <mu-button icon class="right">
        <mu-icon value="add" size="30"></mu-icon>
      </mu-button>
      <mu-list slot="content">
        <mu-list-item button @click="buyTickets">
          <mu-list-item-content>
            <mu-list-item-title>在线购票</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
    </mu-menu>

  </mu-appbar>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
import SideBar from '../SiderBar/SiderBar.vue';

@Component({
  components: {
    SideBar
  }
})
export default class NavigationTop extends Vue {
  @Prop(String) private title!: string
  private open: boolean = false
  private add: boolean = false

  buyTickets() {
    window.location.href = 'https://m.maoyan.com/#movie'
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
    .right {
      margin-right: 30px;
      margin-top: 20px;
    }
  }
</style>