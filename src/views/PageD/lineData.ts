

export let lineData = {
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["复仇者联盟", "蝙蝠侠", "蜘蛛侠", "海上钢琴师", "赛尔号"],
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
    data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "复仇者联盟",
      type: "line",
      stack: "总量",
      data: [1020, 432, 1001, 504, 900, 540, 710],
    },
    {
      name: "蝙蝠侠",
      type: "line",
      stack: "总量",
      data: [520, 182, 591, 454, 290, 330, 310],
    },
    {
      name: "蜘蛛侠",
      type: "line",
      stack: "总量",
      data: [1150, 232, 201, 624, 190, 330, 910],
    },
    {
      name: "海上钢琴师",
      type: "line",
      stack: "总量",
      data: [320, 1532, 701, 134, 390, 2030, 320],
    },
    {
      name: "赛尔号",
      type: "line",
      stack: "总量",
      data: [820, 932, 1411, 844, 1290, 120, 1320],
    },
  ],
};
