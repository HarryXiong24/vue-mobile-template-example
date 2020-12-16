<template>
  <div class="pageD">

    <p class="subTitle1">Top榜</p>

    <mu-row>
      <mu-col span="12" lg="4" sm="6">
        <mu-carousel transition="fade" interval="2000" class="carousel">

          <mu-icon value="navigate_before" slot="left"></mu-icon>
          <mu-icon value="navigate_next" slot="right"></mu-icon>
          <template slot="indicator" slot-scope="{ index, active }">
            <mu-button icon class="mu-carousel-indicator-button" :class="{'mu-carousel-indicator-button__active': active}" @click="changeActive(index)">
              <span class="rect-indicator"></span>
            </mu-button>
          </template>

          <mu-carousel-item class="item">
            <img :src="carouselImg1" class="img">
          </mu-carousel-item>
          <mu-carousel-item class="item">
            <img :src="carouselImg2" class="img">
          </mu-carousel-item>
          <mu-carousel-item class="item">
            <img :src="carouselImg3" class="img">
          </mu-carousel-item>
        </mu-carousel>
      </mu-col>
    </mu-row>

    <p class="subTitle1">近期票房排名</p>

    <div class="chart">
      <v-chart :options="lineChartOptions" class="echarts"></v-chart>
    </div>

    <p class="subTitle1">近期观影人次信息</p>

    <div class="chart">
      <v-chart :options="heatMapOptions" class="echarts2"></v-chart>
    </div>

  </div>
</template>

<script lang="ts">

import carouselImg1 from '../../assets/images/post/1.jpg';
import carouselImg2 from '../../assets/images/post/2.jpg';
import carouselImg3 from '../../assets/images/post/3.jpg';
import carouselImg4 from '../../assets/images/post/4.jpg';
import carouselImg5 from '../../assets/images/post/5.jpg';
import { Prop, Component, Vue } from 'vue-property-decorator';
import { lineData } from '../../util/lineData';
import { heatMapData } from '../../util/heatMapData';

@Component
export default class PageD extends Vue {

  public carouselImg1: any = carouselImg1
  public carouselImg2: any = carouselImg2
  public carouselImg3: any = carouselImg3
  public carouselImg4: any = carouselImg4
  public carouselImg5: any = carouselImg5

  public lineChartOptions: any = lineData; 
  public heatMapOptions: any = heatMapData;

}
</script>

<style lang="scss">
  .pageD {
    width: 100%;

    .subTitle1 {
      margin: 80px 0;
      font-size: 80px;
      &::before {
        content: '';
        border-left: 20px #673ab7 solid;
        padding-left: 30px;
      }
    }

    .carousel {
      height: 1000px;
      width: 100%;
      .item {
        .img {
          height: 1000px;
          width: 100%;
        }
      }
    }

    .chart {
      width: 100%;
      .echarts {
        width: 95% !important;
      }

      .echarts2 {
        width: 100% !important;
        // margin-left: 100px;
      }
    }

  }
</style>