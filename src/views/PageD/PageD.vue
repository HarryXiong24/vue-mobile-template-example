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

import { Prop, Component, Vue } from 'vue-property-decorator';
import { lineData } from './lineData';
import getHeatMap from '../../api/heatMap';
import getLineData from '../../api/lineData';

@Component
export default class PageD extends Vue {

  public lineChartOptions: any = {}
  public heatMapOptions: any = {}


  public active1: number = 0;

  async getHeatMap() {
    let result = await getHeatMap()
    let heatMapData = result.data
    heatMapData.data = heatMapData.data.map(function(item: any) {
      return [item[1], item[0], item[2] || "-"];
    });
    this.heatMapOptions = {
      tooltip: {
        position: "top",
      },
      animation: false,
      grid: {
        height: "50%",
        top: "10%",
      },
      xAxis: {
        type: "category",
        data: heatMapData.hours,
        splitArea: {
          show: true,
        },
      },
      yAxis: {
        type: "category",
        data: heatMapData.days,
        splitArea: {
          show: true,
        },
      },
      visualMap: {
        min: 0,
        max: 10,
        calculable: true,
        orient: "horizontal",
        left: "center",
        bottom: "15%",
      },
      series: [
        {
          name: "当日上座率",
          type: "heatmap",
          data: heatMapData.data,
          label: {
            show: true,
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
  }

  async getLineData() {
    let result = await getLineData()
    let lineData = result.data

    console.log(lineData)

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
    this.getHeatMap()
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