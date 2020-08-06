<template>
  <div class="app">
    <!-- Init页面应该控制不同位置的显示 -->
    <HeadTop :title="headTitle">
    </HeadTop>
    <mu-row justify-content="center">
      <router-view/>
    </mu-row>
    <!-- 占位用 -->
    <div class="bottom"></div>
    <mu-row justify-content="center" class="footerGuide">
      <mu-col span="12">
        <mu-bottom-nav :value.sync="shift" ripple color="amber800" @change="getHead">
          <mu-bottom-nav-item value="A" title="功能页A" icon="accessibility_new" to="/Init/Location" replace></mu-bottom-nav-item>
          <mu-bottom-nav-item value="B" title="功能页B" icon="assignment" to="/Init/PersonInfo" replace></mu-bottom-nav-item>
          <mu-bottom-nav-item value="C" title="功能页C" icon="assessment" to="/Init/Analysis" replace></mu-bottom-nav-item>
          <mu-bottom-nav-item value="D" title="功能页D" icon="info" to="/Init/Warning" replace></mu-bottom-nav-item>
        </mu-bottom-nav>
      </mu-col>
    </mu-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import HeadTop from '../../components/HeadTop/HeadTop.vue';

@Component({
  components: {
    HeadTop
  }
})
export default class Init extends Vue {
  private shift: string = 'Location'
  public headTitle: string = ''

  getHead() {
    if (this.shift === 'A') {
      this.headTitle = '人员定位'
    } else if (this.shift === 'B') {
      this.headTitle = '出勤信息'
    } else if (this.shift === 'C') {
      this.headTitle = '环境监测'
    } else if (this.shift === 'D') {
      this.headTitle = '预警信息'
    }
  }

  async redirectTab() {
    this.shift = this.$route.path.split("/")[2]
    this.getHead()
  }

  mounted() {
    this.redirectTab()
  }
}

</script>

<style lang="scss">
  .app {
    .bottom {
      width: 100%;
      height: 300px;
      background: #fafafa;
      z-index: 0;
    }
    .footerGuide {
      position: fixed;
      width: 100%;
      bottom: 0;
      z-index: 1000;
      background-color: white;
    }
  }
</style>