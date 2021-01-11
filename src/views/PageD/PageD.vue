<template>
  <div class="pageD">

    <mu-tabs :value.sync="active1" inverse color="secondary" text-color="rgba(0, 0, 0, .54)"  center full-width>
      <mu-tab>大片票房</mu-tab>
      <mu-tab>观影热度</mu-tab>
    </mu-tabs>

    <div class="chart" v-if="active1 === 0">
      <p class="subTitle1">大片票房</p>
      <v-chart :options="lineChartOptions" class="echarts"></v-chart>
    </div>


    <div class="chart" v-if="active1 === 1">
      <p class="subTitle1">近期观影信息</p>
      <v-chart :options="heatMapOptions" class="echarts2"></v-chart>
    </div>

  </div>
</template>

<script lang="ts">

import reqLineData from '../../api/lineData';

import { Prop, Component, Vue } from 'vue-property-decorator';
import { heatMapData } from '../../util/heatMapData';

@Component
export default class PageD extends Vue {

  public lineChartOptions: any = {}
  public heatMapOptions: any = heatMapData;

  public active1: number = 0;

   async getLineData() {
    let result = await reqLineData()
    let lineData = result.data
    this.lineChartOptions = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: lineData.legend,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    toolbox: {
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: lineData.xAxis,
    },
    yAxis: {
      type: "value",
    },
    series: lineData.series
  };

  }
  created() {
    this.getLineData()
  }

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