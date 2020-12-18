<template>
  <div class="pageD">

    <mu-tabs :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  center full-width>
      <mu-tab>Top榜</mu-tab>
      <mu-tab>大片票房</mu-tab>
      <mu-tab>观影热度</mu-tab>
    </mu-tabs>

    <mu-row v-if="active1 === 0">
      <p class="subTitle1">Top榜</p>
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
          <mu-carousel-item class="item">
            <img :src="carouselImg4" class="img">
          </mu-carousel-item>
          <mu-carousel-item class="item">
            <img :src="carouselImg5" class="img">
          </mu-carousel-item>
        </mu-carousel>
      </mu-col>

      <p class="subTitle1">动作榜</p>
      <mu-col span="12" lg="4" sm="6">
        <mu-carousel transition="fade" interval="2500" class="carousel">

          <mu-icon value="navigate_before" slot="left"></mu-icon>
          <mu-icon value="navigate_next" slot="right"></mu-icon>
          <template slot="indicator" slot-scope="{ index, active }">
            <mu-button icon class="mu-carousel-indicator-button" :class="{'mu-carousel-indicator-button__active': active}" @click="changeActive(index)">
              <span class="rect-indicator"></span>
            </mu-button>
          </template>

          <mu-carousel-item class="item">
            <img :src="carouselImga" class="img">
          </mu-carousel-item>
          <mu-carousel-item class="item">
            <img :src="carouselImgb" class="img">
          </mu-carousel-item>
          <mu-carousel-item class="item">
            <img :src="carouselImgc" class="img">
          </mu-carousel-item>
          <mu-carousel-item class="item">
            <img :src="carouselImgd" class="img">
          </mu-carousel-item>
          <mu-carousel-item class="item">
            <img :src="carouselImge" class="img">
          </mu-carousel-item>
        </mu-carousel>
      </mu-col>
    </mu-row>

    <div class="chart" v-if="active1 === 1">
      <p class="subTitle1">大片票房</p>
      <v-chart :options="lineChartOptions" class="echarts"></v-chart>
    </div>


    <div class="chart" v-if="active1 === 2">
      <p class="subTitle1">近期观影信息</p>
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
import carouselImga from '../../assets/images/post/a.jpg';
import carouselImgb from '../../assets/images/post/b.jpg';
import carouselImgc from '../../assets/images/post/c.jpg';
import carouselImgd from '../../assets/images/post/d.jpg';
import carouselImge from '../../assets/images/post/e.jpg';

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
  public carouselImga: any = carouselImga
  public carouselImgb: any = carouselImgb
  public carouselImgc: any = carouselImgc
  public carouselImgd: any = carouselImgd
  public carouselImge: any = carouselImge


  public lineChartOptions: any = lineData; 
  public heatMapOptions: any = heatMapData;

  public active1: number = 0;

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
      height: 1200px;
      width: 100%;
      .item {
        .img {
          height: 1200px;
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