<template>
  <div class="app">
    <!-- Init页面应该控制不同位置的显示 -->
    <NavigationTop :title="headTitle">
    </NavigationTop>
    <mu-row justify-content="center">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </mu-row>
    <!-- 占位用 -->
    <div class="bottom"></div>
    <mu-row justify-content="center" class="footerGuide">
      <mu-col span="12">
        <mu-bottom-nav :value.sync="shift" ripple color="amber800" @change="getHead">
          <mu-bottom-nav-item value="PageA" title="电影推荐" icon="accessibility_new" to="/Init/PageA" replace></mu-bottom-nav-item>
          <mu-bottom-nav-item value="PageB" title="国内大片" icon="assignment" to="/Init/PageB" replace></mu-bottom-nav-item>
          <mu-bottom-nav-item value="PageC" title="国外大片" icon="assessment" to="/Init/PageC" replace></mu-bottom-nav-item>
          <mu-bottom-nav-item value="PageD" title="综合数据分析" icon="info" to="/Init/PageD" replace></mu-bottom-nav-item>
        </mu-bottom-nav>
      </mu-col>
    </mu-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import NavigationTop from '../../components/NavigationTop/NavigationTop.vue';

@Component({
  components: {
    NavigationTop
  }
})
export default class Init extends Vue {
  private shift: string = 'PageA'
  public headTitle: string = ''

  getHead() {
    if (this.shift === 'PageA') {
      this.headTitle = '电影推荐'
    } else if (this.shift === 'PageB') {
      this.headTitle = '国内大片'
    } else if (this.shift === 'PageC') {
      this.headTitle = '国外大片'
    } else if (this.shift === 'PageD') {
      this.headTitle = '综合数据分析'
    }
  }

  async redirectTab() {
    let values = this.$route.path.split("/")
    this.shift = this.$route.path.split("/")[values.length - 1]
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