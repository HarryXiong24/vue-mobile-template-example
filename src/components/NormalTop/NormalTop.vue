<template>
  <mu-appbar style="width: 100%;" color="#673ab7" class="topBar">
    <mu-menu slot="left">
      <mu-button icon class="icon" @click="back">
        <mu-icon value="keyboard_arrow_left"></mu-icon>
      </mu-button>
    </mu-menu>
    <div slot="default" class="title">
      <div>{{title}}</div>
    </div>
  </mu-appbar>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';


@Component
export default class NormalTop extends Vue {
  @Prop(String) private title!: string
  private time: string = ''
  private value: string = ''
  private open: boolean = false

  back () {
    this.$router.back()
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